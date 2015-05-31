/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = formatIdlAst;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function formatIdlAst(ast) {
    return _rx2['default'].Observable.of(ast).map(function (x) {
        return JSON.stringify(x, null, 4);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=formatIdlAst.js.map