import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const output = resolve('dist/client');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const html = readFileSync(resolve(output, 'index.html'), 'utf8');

test('export contains the company identity and intended scope', () => {
  for (const text of [
    'MonoonAI',
    'Explore &amp; frame',
    'Engineer &amp; communicate',
    'Deliver &amp; scale',
    'FROM IDEA TO EXECUTION',
  ])
    assert.ok(html.includes(text), `Missing content: ${text}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(!html.includes('Your site is taking shape'));
});
test('every in-page navigation destination exists', () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const [, destination] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.has(destination), `Missing anchor: ${destination}`);
});
test('contact stays available without presenting any specific projects', () => {
  assert.ok(html.includes('href="mailto:yongkyun.shin@monoon.ai"'));
  for (const forbidden of [
    /github\.com/i,
    /RustRobotics/i,
    /stack-algebra/i,
    /imu_gnss_fusion/i,
    /\bnoon\b/i,
    /SELECTED WORK/,
  ])
    assert.doesNotMatch(html, forbidden);
});
test('all exported local script, stylesheet, and font assets exist', () => {
  for (const [, asset] of html.matchAll(
    /(?:src|href)="(\/[^"?#]+)(?:\?[^"#]*)?"/g,
  )) {
    assert.ok(
      asset.startsWith(`${basePath}/`),
      `Asset escapes the hosting base path: ${asset}`,
    );
    const localAsset = asset.slice(basePath.length);
    assert.ok(
      existsSync(resolve(output, `.${localAsset}`)),
      `Missing exported asset: ${asset}`,
    );
  }
});
test('metadata and accessible model description survive export', () => {
  assert.match(html, /<html[^>]*lang="en"/);
  assert.match(html, /name="description"/);
  assert.ok(html.includes('ILLUSTRATIVE MODEL'));
  assert.ok(html.includes('aria-labelledby="navigation-title navigation-description"'));
});

test('scientific figures have unique IDs and valid accessible descriptions', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'Duplicate SVG or section ID');
  for (const [, names] of html.matchAll(/aria-labelledby="([^"]+)"/g)) {
    for (const name of names.split(' '))
      assert.ok(ids.includes(name), `Missing accessible label: ${name}`);
  }
  for (const [, id] of html.matchAll(/url\(#([^)]+)\)/g))
    assert.ok(ids.includes(id), `Missing SVG marker or pattern: ${id}`);
  assert.ok(html.includes('dynamics-description'));
  assert.ok(html.includes('Vehicle trajectory and position estimation'));
  assert.ok(html.includes('Vehicle dynamics and steering geometry'));
  assert.doesNotMatch(html, /(?:NaN|Infinity)/);
});
