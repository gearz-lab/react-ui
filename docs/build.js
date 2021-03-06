import from 'colors';
import React from 'react';
import path from 'path';
import Router from 'react-router';
import routes from './src/Routes';
import Root from './src/Root';
import fsep from 'fs-extra-promise';
import { exec } from 'child-process-promise';
import rimraf from 'rimraf-promise';

const repoRoot = path.resolve(__dirname, '../');
const docsBuilt = path.join(repoRoot, 'docs-built');

const licenseSrc = path.join(repoRoot, 'LICENSE');
const licenseDest = path.join(docsBuilt, 'LICENSE');
const readmeSrc = path.join(__dirname, 'README.docs.md');
const readmeDest = path.join(docsBuilt, 'README.md');

export default function BuildDocs() {
    console.log('Building: '.cyan + 'docs'.green);

    return rimraf(docsBuilt)
        .then(() => fsep.mkdir(docsBuilt))
        .then(() => {
            let writes = Root
                .getPages()
                .map(fileName => new Promise((resolve, reject) => {
                    Router.run(routes, '/' + fileName, Handler => {
                        let RootHTML = React.renderToString(React.createElement(Handler));
                        return fsep.writeFile(path.join(docsBuilt, fileName), RootHTML)
                            .then(write => resolve(write));
                    });
                }));

            return Promise.all(writes.concat([
                exec(`webpack --config webpack.docs.js -p --bail`),
                fsep.copy(licenseSrc, licenseDest),
                fsep.copy(readmeSrc, readmeDest)
            ]));
        })
        .then(() => console.log('Built: '.cyan + 'docs'.green));
}
