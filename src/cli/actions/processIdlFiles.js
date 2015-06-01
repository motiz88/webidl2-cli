/* @flow */
import fs from 'fs';
import Rx from 'rx';
import RxNode from 'rx-node';
import parseIdlSource from '../../parseIdlSource';
import formatIdlAst from '../../formatIdlAst';

import rxGlob from '../../rx-glob';
import stream from 'stream';
import request from 'request';
import url from 'url';

function formatError(err) {
    if (err.stack)
        return err.stack;
    if (err.message && err.line)
        return JSON.stringify({
            message: err.message,
            line: err.line
        }, null, 4);
    else
        return err;
}

export
default

function processIdlFiles(inputs: Array < string >, command): void {
    var options = {
        allowNestedTypedefs: command.allowNestedTypedefs,
        allowClass: command.allowClass,
        allowExtends: command.allowExtends,
    };
    Rx.Observable.from(inputs)
        .concatMap(input => {
            if (input === '-')
                return Rx.Observable.of(process.stdin);
            else {
                var inputUrl = url.parse(input);
                if (inputUrl.protocol === 'http:' || inputUrl.protocol === 'https:') {
                    var buf = new stream.PassThrough();
                    request(input).pipe(buf);
                    return Rx.Observable.of(buf);
                }
            }
            return (rxGlob.hasMagic(input) ? rxGlob(input) : Rx.Observable.of(input))
                .map(fs.createReadStream);
        })
        .concatMap(readable => {
            readable.setEncoding('utf8');
            return RxNode.fromReadableStream(readable)
                .toArray().map(arr => arr.join(""));
        })
        .concatMap(src => parseIdlSource(src, options))
        .concatMap(formatIdlAst)
        .forEach(s => process.stdout.write(s),
            err => {
                process.stderr.write(formatError(err));
            }, () => process.stdout.write('\n\n'));
}