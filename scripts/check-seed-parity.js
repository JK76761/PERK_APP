#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sqlFiles = [
  'docs/supabase-seed-perks.sql',
  'docs/supabase-seed-perks-expanded.sql',
  'docs/supabase-seed-perks-practical-savings.sql',
  'docs/supabase-seed-perks-research-rewards.sql',
  'docs/supabase-seed-perks-loyalty-memberships.sql',
];
const tsFile = 'data/perks.ts';
function read(file) { return fs.readFileSync(path.join(process.cwd(), file), 'utf8'); }
function idsFromTs(text) {
  return [
    ...text.matchAll(/(?:id:\s*'([^']+)'|"id":\s*"([^"]+)")/g),
  ].map((match) => match[1] ?? match[2]);
}
function idsFromSql(text) { return [...text.matchAll(/\('([^']+)'/g)].map((m) => m[1]); }
const tsIds = idsFromTs(read(tsFile));
const sqlIdEntries = sqlFiles.flatMap((file) => idsFromSql(read(file)).map((id) => ({ file, id })));
const sqlIds = sqlIdEntries.map((entry) => entry.id);
const duplicates = [...new Set(sqlIds.filter((id, index) => sqlIds.indexOf(id) !== index))];
const missingFromTs = [...new Set(sqlIds.filter((id) => !tsIds.includes(id)))];
const extraInTs = [...new Set(tsIds.filter((id) => !sqlIds.includes(id)))];
console.log('Seed parity report');
console.log('------------------');
console.log('TS perks:', tsIds.length);
console.log('SQL perks:', [...new Set(sqlIds)].length);
console.log('Duplicate SQL ids:', duplicates.length);
if (duplicates.length) console.log(duplicates.join('\n'));
console.log('Missing from data/perks.ts:', missingFromTs.length);
if (missingFromTs.length) console.log(missingFromTs.join('\n'));
console.log('Extra in data/perks.ts:', extraInTs.length);
if (extraInTs.length) console.log(extraInTs.join('\n'));
process.exit(duplicates.length || missingFromTs.length || extraInTs.length ? 1 : 0);
