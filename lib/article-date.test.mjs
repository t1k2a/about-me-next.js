import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
test('article dates stay the same across server and browser time zones', () => {
  const moduleUrl = new URL('./article-date.mjs', import.meta.url).href;
  for (const TZ of ['UTC', 'Asia/Tokyo', 'America/Los_Angeles']) {
    const code = `import { formatArticleDate } from ${JSON.stringify(moduleUrl)};console.log(formatArticleDate('2019-07-04T01:30:00+09:00'));`;
    const output = execFileSync(process.execPath, ['--input-type=module', '-e', code], { env: { ...process.env, TZ }, encoding: 'utf8' });
    assert.equal(output.trim(), '2019年 7月 4日');
  }
});
