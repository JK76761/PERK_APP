# Supabase 설정

1. 새 Supabase 프로젝트를 만듭니다.
2. Supabase의 SQL Editor를 엽니다.
3. `docs/supabase-schema.sql`을 실행해서 `public.perks` 테이블과 읽기 정책을 만듭니다.
4. `docs/supabase-seed-all.sql`을 실행해서 현재 검증된 seed 데이터를 한 번에 upsert 합니다.
5. Supabase Connect 화면 또는 API Keys 화면에서 Project URL과 publishable key를 복사합니다.
6. `.env.example`을 기준으로 로컬 `.env` 파일을 만듭니다.
7. 아래 값을 채웁니다.
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `EXPO_PUBLIC_LOGO_DEV_TOKEN` (Logo.dev 원격 브랜드 로고를 쓸 때)
8. `npm run start`로 Expo 앱을 실행합니다.
9. 개발 로그에서 앱이 perk를 정상 로딩하고, 데이터 소스가 Supabase로 바뀌는지 확인합니다.

## 선택: 기본 seed + 확장 seed를 순서대로 넣기

기본 seed가 먼저 잘 동작하는지 나눠서 넣고 싶다면 아래 순서로 실행하면 됩니다.

1. `docs/supabase-schema.sql`
2. `docs/supabase-seed-perks.sql`
3. `docs/supabase-seed-perks-expanded.sql`

이 확장 seed는 같은 `public.perks` 구조를 쓰고 `upsert` 기반이라 다시 실행해도 안전합니다.

## 추천: 통합 seed 파일 사용

설정을 단순하게 유지하려면 아래 순서가 가장 깔끔합니다.

1. `docs/supabase-schema.sql`
2. `docs/supabase-seed-all.sql`
3. `docs/supabase-logo-domain-examples.sql`

`docs/supabase-seed-all.sql`은 아래 파일들을 순서대로 합친 묶음입니다.

1. `docs/supabase-seed-perks.sql`
2. `docs/supabase-seed-perks-expanded.sql`
3. `docs/supabase-seed-perks-practical-savings.sql`
4. `docs/supabase-seed-perks-research-rewards.sql`
5. `docs/supabase-seed-perks-loyalty-memberships.sql`

## Seed parity 체크

앱 로컬 fallback 데이터와 SQL seed가 어긋나지 않는지 확인할 수 있습니다.

- `npm run check:seed-parity`:
  - `data/perks.ts`와 SQL seed 전체를 비교합니다.
- `npm run sync:fallback-perks`:
  - SQL seed와 `logo_domain` 업데이트를 기준으로 `data/perks.ts`를 다시 맞춥니다.

추천 흐름:

1. seed SQL 수정
2. `npm run sync:fallback-perks`
3. `npm run check:seed-parity`

## 선택: Research & Rewards seed 추가

유료 리서치나 설문형 수익 기회를 별도 Explore 카테고리로 넣고 싶다면:

1. `docs/supabase-schema.sql`
2. `docs/supabase-seed-perks.sql`
3. `docs/supabase-seed-perks-research-rewards.sql`
4. `docs/supabase-logo-domain-examples.sql`

## 선택: 실용 절약 / 식비 / AI 툴 seed 추가

일상 식비 절약, cashback 성격의 savings, AI 학습 툴, early-career 유틸리티까지 확장하고 싶다면:

1. `docs/supabase-schema.sql`
2. `docs/supabase-seed-perks.sql`
3. `docs/supabase-seed-perks-practical-savings.sql`
4. `docs/supabase-logo-domain-examples.sql`

## 선택: loyalty / 멤버십 / 장보기 / 주유 savings seed 추가

반복 사용 가능한 멤버십, 장보기 리워드, 주유 프로그램, 리테일 loyalty까지 포함해 100개 수준의 savings 카탈로그로 키우고 싶다면:

1. `docs/supabase-schema.sql`
2. `docs/supabase-seed-perks.sql`
3. `docs/supabase-seed-perks-loyalty-memberships.sql`
4. `docs/supabase-logo-domain-examples.sql`

## 참고

- 앱은 로컬 fallback 데이터를 `data/perks.ts`에 유지합니다.
- Supabase 클라이언트는 공개 Expo env 값만 사용합니다.
- 앱은 구버전 이름인 `EXPO_PUBLIC_SUPABASE_ANON_KEY`도 fallback으로 허용합니다.
- 원격 브랜드 로고를 쓰려면 `EXPO_PUBLIC_LOGO_DEV_TOKEN`에 공개 Logo.dev 토큰이 필요합니다.
- 모바일 앱에는 service role key를 넣으면 안 됩니다.
