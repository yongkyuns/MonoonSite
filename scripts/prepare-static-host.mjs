import { rename, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Vinext writes a path-based assetPrefix into the output directory tree.
// GitHub Pages already mounts the artifact at that prefix, so remove the
// extra on-disk nesting without changing any generated asset URLs.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath && !/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be a slash-prefixed repository path.');
}
const output = resolve('dist/client');
if (basePath) {
  await rename(resolve(output, `.${basePath}`, '_next'), resolve(output, '_next'));
}
await writeFile(resolve(output, '.nojekyll'), '');
