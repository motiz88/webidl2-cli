/* @flow */

import Rx from 'rx';

export
default

function formatIdlAst(ast: IdlAstArray): Rx.Observable {
    return Rx.Observable.of(ast)
    		 .map(x => JSON.stringify(x, null, 4));
}