# Perk

Perk is an Expo React Native app for discovering verified savings opportunities for students and early-career savers.

The app focuses on practical, official-source savings across:

- banking bonuses
- food deals
- transport concessions
- subscriptions
- software and study tools
- loyalty and rewards programs
- research and earn-money opportunities

## Stack

- Expo React Native
- Expo Router
- Supabase
- Logo.dev for optional remote brand logos

## Local development

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file from `.env.example`

3. Set:

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `EXPO_PUBLIC_LOGO_DEV_TOKEN`

4. Start the app

```bash
npm run start
```

## Useful scripts

```bash
npm run lint
npx tsc --noEmit
npm run check:seed-parity
npm run sync:fallback-perks
```

## Supabase setup

See [docs/supabase-setup.md](/Users/josh/Desktop/perk/docs/supabase-setup.md).

## Release docs

- [App Store readiness](/Users/josh/Desktop/perk/docs/app-store-readiness.md)
- [App Store metadata draft](/Users/josh/Desktop/perk/docs/app-store-metadata.md)
- [Small-screen QA checklist](/Users/josh/Desktop/perk/docs/small-screen-qa.md)
- [Privacy policy](/Users/josh/Desktop/perk/docs/privacy-policy.md)
- [Support](/Users/josh/Desktop/perk/docs/support.md)
