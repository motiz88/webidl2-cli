#!/usr/bin/env node


/* @flow */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _packageJson = require('../../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _actionsProcessIdlFiles = require('./actions/processIdlFiles');

var _actionsProcessIdlFiles2 = _interopRequireDefault(_actionsProcessIdlFiles);

var program = new _commander2['default'].Command('webidl2');

program.version(_packageJson2['default'].version).arguments('<idlFiles...>').option('--allow-nested-typedefs').option('--allow-class').option('--allow-extends').action(_actionsProcessIdlFiles2['default']);

if (process.argv.length <= 2) program.outputHelp();else program.parse(process.argv);
//# sourceMappingURL=index.js.map