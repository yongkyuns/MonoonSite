import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const output = resolve('dist/client');
const html = readFileSync(resolve(output, 'index.html'), 'utf8');

test('export contains the company identity and intended scope', () => {
  for (const text of ['MonoonAI', 'Sense &amp; estimate', 'Model &amp; control', 'Visualize &amp; explain', 'CURRENT EXPLORATION']) assert.ok(html.includes(text), `Missing content: ${text}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(!html.includes('Your site is taking shape'));
});
test('every in-page navigation destination exists', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, destination] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(destination), `Missing anchor: ${destination}`);
});
test('contact and all four project links use verified destinations', () => {
  assert.ok(html.includes('href="mailto:yongkyun.shin@monoon.ai"'));
  for (const repo of ['imu_gnss_fusion', 'RustRobotics', 'stack-algebra', 'noon']) assert.ok(html.includes(`href="https://github.com/yongkyuns/${repo}"`));
  for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) assert.match(tag, /rel="noopener noreferrer"/);
});
test('all exported local script, stylesheet, and font assets exist', () => {
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"?#]+)(?:\?[^"#]*)?"/g)) assert.ok(existsSync(resolve(output, `.${asset}`)), `Missing exported asset: ${asset}`);
});
test('metadata and accessible model description survive export', () => {
  assert.match(html, /<html[^>]*lang="en"/);
  assert.match(html, /name="description"/);
  assert.ok(html.includes('ILLUSTRATIVE MODEL'));
  assert.ok(html.includes('aria-labelledby="phase-title phase-description"'));
});
