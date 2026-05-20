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
const logoDomainFile = 'docs/supabase-logo-domain-examples.sql';
const outputFile = 'data/perks.ts';

const sqlColumns = [
  'id',
  'company',
  'title',
  'subtitle',
  'category',
  'badge_text',
  'badge_tone',
  'expiry_text',
  'savings_value',
  'logo_type',
  'logo_key',
  'description',
  'how_to_claim',
  'terms',
  'external_url',
  'source_url',
  'verified_at',
  'expires_at',
  'is_verified',
  'region',
  'student_only',
  'provider',
  'is_featured',
  'is_trending',
];

const camelMap = {
  badge_text: 'badgeText',
  badge_tone: 'badgeTone',
  expiry_text: 'expiryText',
  savings_value: 'savingsValue',
  logo_type: 'logoType',
  logo_key: 'logoKey',
  how_to_claim: 'howToClaim',
  external_url: 'externalUrl',
  source_url: 'sourceUrl',
  verified_at: 'verifiedAt',
  expires_at: 'expiresAt',
  is_verified: 'isVerified',
  student_only: 'studentOnly',
  is_featured: 'isFeatured',
  is_trending: 'isTrending',
};

const allowedLogoTypes = new Set([
  'bank',
  'banking',
  'cloud',
  'code',
  'design',
  'domain',
  'education',
  'food',
  'github',
  'mobile',
  'research',
  'shopping',
  'spotify',
  'student',
  'subscription',
  'tech',
  'travel',
]);

function read(file) {
  return fs.readFileSync(path.join(process.cwd(), file), 'utf8');
}

function splitTopLevel(text) {
  const parts = [];
  let current = '';
  let inString = false;
  let bracketDepth = 0;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === "'") {
      current += char;

      if (inString && next === "'") {
        current += next;
        index += 1;
        continue;
      }

      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === '[') {
        bracketDepth += 1;
      } else if (char === ']') {
        bracketDepth -= 1;
      } else if (char === ',' && bracketDepth === 0) {
        parts.push(current.trim());
        current = '';
        continue;
      }
    }

    current += char;
  }

  if (current.trim()) {
    parts.push(current.trim());
  }

  return parts;
}

function decodeSqlString(token) {
  return token.slice(1, -1).replace(/''/g, "'");
}

function parseArray(token) {
  const match = token.match(/^ARRAY\[(.*)\]::text\[\]$/s);
  if (!match) {
    throw new Error(`Unsupported ARRAY token: ${token}`);
  }

  const items = splitTopLevel(match[1]);
  return items.map((item) => decodeSqlString(item.trim()));
}

function parseValue(token) {
  const trimmed = token.trim();

  if (trimmed === 'null') {
    return undefined;
  }

  if (trimmed === 'true') {
    return true;
  }

  if (trimmed === 'false') {
    return false;
  }

  if (trimmed.startsWith("ARRAY[")) {
    return parseArray(trimmed);
  }

  if (trimmed.startsWith("'")) {
    return decodeSqlString(trimmed);
  }

  throw new Error(`Unsupported SQL token: ${trimmed}`);
}

function extractTuples(sql) {
  const valuesIndex = sql.indexOf('values');
  const conflictIndex = sql.indexOf('on conflict');

  if (valuesIndex === -1 || conflictIndex === -1 || conflictIndex <= valuesIndex) {
    throw new Error('Could not find values/on conflict block');
  }

  const valuesBlock = sql.slice(valuesIndex + 'values'.length, conflictIndex);
  const tuples = [];
  let depth = 0;
  let inString = false;
  let current = '';

  for (let index = 0; index < valuesBlock.length; index += 1) {
    const char = valuesBlock[index];
    const next = valuesBlock[index + 1];

    if (char === "'") {
      current += char;

      if (inString && next === "'") {
        current += next;
        index += 1;
        continue;
      }

      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === '(') {
        depth += 1;
      }

      if (depth > 0) {
        current += char;
      }

      if (char === ')') {
        depth -= 1;
        if (depth === 0) {
          tuples.push(current.slice(1, -1).trim());
          current = '';
        }
      }

      continue;
    }

    if (depth > 0) {
      current += char;
    }
  }

  return tuples;
}

function normalizeLogoType(value) {
  if (!value) {
    return value;
  }

  if (allowedLogoTypes.has(value)) {
    return value;
  }

  return 'shopping';
}

function parseSeedFile(file) {
  const tuples = extractTuples(read(file));
  return tuples.map((tuple) => {
    const values = splitTopLevel(tuple);

    if (values.length !== sqlColumns.length) {
      throw new Error(`${file} has ${values.length} values, expected ${sqlColumns.length}`);
    }

    const row = {};

    sqlColumns.forEach((column, index) => {
      const camelKey = camelMap[column] ?? column;
      const parsedValue = parseValue(values[index]);

      if (parsedValue === undefined) {
        return;
      }

      row[camelKey] = column === 'logo_type' ? normalizeLogoType(parsedValue) : parsedValue;
    });

    return row;
  });
}

function parseLogoDomains() {
  const text = read(logoDomainFile);
  const domains = new Map();
  const pattern = /set logo_domain = '([^']+)'\s+where id = '([^']+)'/g;
  let match = pattern.exec(text);

  while (match) {
    const [, domain, id] = match;
    domains.set(id, domain);
    match = pattern.exec(text);
  }

  return domains;
}

function formatFile(perks) {
  const json = JSON.stringify(perks, null, 2);

  return `import type { Perk } from '@/types/perk';\nexport type { BadgeTone, Perk, PerkCategory, PerkLogoType } from '@/types/perk';\n\nexport const perks: Perk[] = ${json};\n\nexport function getPerkById(id: string) {\n  return perks.find((perk) => perk.id === id);\n}\n`;
}

const logoDomains = parseLogoDomains();
const perks = sqlFiles.flatMap((file) => parseSeedFile(file)).map((perk) => ({
  ...perk,
  ...(logoDomains.has(perk.id) ? { logoDomain: logoDomains.get(perk.id) } : {}),
}));

fs.writeFileSync(path.join(process.cwd(), outputFile), formatFile(perks));
console.log(`Synced ${perks.length} perks to ${outputFile}`);
