/* eslint no-process-exit: 0 */

import path from 'path';
import docs from '../docs/build';

const repoRoot = path.resolve(__dirname, '../');

export default function Build(noExitOnFailure) {
    return docs();
};