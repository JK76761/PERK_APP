# TestFlight Build Guide

Last updated: 2026-05-20

## Current iOS app identifier

- Bundle identifier: `com.jk76761.perk`
- App version: `1.0.0`
- Build number: managed through EAS production auto-increment

## Before first TestFlight build

1. Log in to Expo

```bash
npx eas login
```

2. Configure the project if needed

```bash
npx eas build:configure
```

3. Confirm the iOS bundle identifier in `app.json`

## Internal preview build

Use this for quick internal testing:

```bash
npx eas build --platform ios --profile preview
```

## Production/TestFlight build

Use this when preparing the build for TestFlight:

```bash
npx eas build --platform ios --profile production
```

## After the build finishes

Check these in TestFlight:

- app opens cleanly
- intro overlay does not block legal/support routes
- Home, Explore, Detail, Saved, Profile load correctly
- share works
- support email links open
- external links open
- logo fallback works when a remote logo fails
- saved perks remain stored locally

## Submission prep

Once the build is validated, complete:

- App Store metadata
- screenshots
- privacy policy URL
- support URL
- review notes
