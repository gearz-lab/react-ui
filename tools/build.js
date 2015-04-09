/* eslint no-process-exit: 0 */

import from 'colors';
import path from 'path';
import docs from '../docs/build';
import { copy } from './fs-utils';
import { exec, spawn } from 'child-process-promise';

import yargs from 'yargs';

const argv = yargs
    .option('docs-only', {
        demand: false,
        default: false
    })
    .argv;

export default function Build(noExitOnFailure) {
    if (argv.docsOnly) {
        return docs();
    } else {
        // there will be a function here to build everything here, including the docs
    }
}

