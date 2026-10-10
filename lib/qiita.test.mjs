import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchQiitaItems } from './qiita.mjs';

test('uses the public endpoint without credentials and serializes only display fields', async () => {
  const item = {id:'a',created_at:'2026-01-01',title:'Article',url:'https://qiita.com/t1k2a/items/a',likes_count:10};
  const result = await fetchQiitaItems(async (url, options) => {
    assert.equal(url, 'https://qiita.com/api/v2/users/t1k2a/items?per_page=100');
    assert.equal(options.headers, undefined);
    assert.ok(options.signal instanceof AbortSignal);
    return {ok:true,json:async()=>[
      {...item, body:'must not enter page props'},
      {...item,id:'low',likes_count:9},
      {...item,id:'private',private:true}
    ]};
  });
  assert.deepEqual(result, {items:[item],unavailable:false});
});
for (const [name, fetcher] of [
  ['HTTP error', async()=>({ok:false})],
  ['network failure', async()=>{throw new Error('network')}],
  ['invalid JSON', async()=>({ok:true,json:async()=>{throw new Error('json')}})],
  ['non-array response', async()=>({ok:true,json:async()=>({message:'error'})})],
]) {
  test(name + ' returns an explicit unavailable state', async()=>{
    assert.deepEqual(await fetchQiitaItems(fetcher),{items:[],unavailable:true});
  });
}
