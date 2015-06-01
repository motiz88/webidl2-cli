#!/usr/bin/env node

/* @flow */
import commander from 'commander';
import pkg from '../../package.json';

import processIdlFiles from './actions/processIdlFiles';

var program = new commander.Command('webidl2');

program
    .version(pkg.version)
    .arguments('<idlFiles...>')
    .option('--allow-nested-typedefs')
    .option('--allow-class')
    .option('--allow-extends')
    .action(processIdlFiles);

if (process.argv.length <= 2)
	program.outputHelp();
else
	program.parse(process.argv);
