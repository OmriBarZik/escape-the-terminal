import { fs, NestedDirectoryJSON } from 'memfs';
import { load } from '../saves/game.js';

/**
 * @returns {{fs: NestedDirectoryJSON, access: {file: string, }[] }}
 */
// eslint-disable-next-line no-unused-vars
async function loaFs() {
  const { fs: fileSystem } = load();
  fs.fromNestedJSON(fileSystem.files);

  fileSystem.access.forEach(({ mode, path }) => {
    fs.chmod(path, mode);
  });
}

export function initFs() {
  fs.fromNestedJSON({});
}

export function getCwd() {}
