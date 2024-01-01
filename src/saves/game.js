import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { type, homedir } from 'node:os';
import { NestedDirectoryJSON } from 'memfs';

/**
 * @typedef gameData
 * @type {Object}
 * @property {Object} fs
 * @property {NestedDirectoryJSON} fs.files
 * @property {Object[]} fs.access
 * @property {string} fs.access[].path
 * @property {import('memfs/lib/volume.js').TMode} fs.access[].mode
 */

const basePath =
  process.env.APPDATA ||
  (type() == 'Darwin'
    ? homedir() + '/Library/Preferences'
    : homedir() + '/.local/share');

const saveDirPath = join(basePath, 'escape-the-terminal');
const saveFilePath = join(saveDirPath, 'save.json');

export async function save() {
  await mkdir(saveDirPath, { recursive: true });
  writeFile(saveFilePath, {});
}

/**
 * @returns {gameData}
 */
export async function load() {
  try {
    return await readFile(saveFilePath);
  } catch (error) {
    return {};
  }
}
