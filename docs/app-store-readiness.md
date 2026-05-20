# App Store 출시 작업표

마지막 업데이트: 2026-05-18

이 문서는 Perk를 App Store 제출 가능한 수준으로 끌어올리기 위한 실제 작업표입니다.
설명보다 실행 순서에 맞춰 정리했고, 이미 끝난 것과 아직 남은 것을 분리했습니다.

## 현재 판단

- 현재 상태: 강한 프리런치 베타
- 아직 필요한 것: 실기기 QA, 공개 정책 URL, 지원 경로, App Store 메타데이터, TestFlight 검증
- 바로 제출 가능 여부: 아직 아님

## 이미 끝난 것

- [x] Supabase 연동 동작
- [x] `Home`, `Explore`, `Detail`, `Saved`, `Profile` 기본 흐름
- [x] 로컬 fallback + Supabase 데이터 구조 유지
- [x] `logo_domain` 기반 원격 브랜드 로고
- [x] 공유, 저장, 공식 링크 이동, 오래된 혜택 제보, perk 요청 액션
- [x] 로컬 preferences / notification setup
- [x] seed parity 정리

### 완료 확인 명령어

```bash
npm run sync:fallback-perks
npm run check:seed-parity
npx tsc --noEmit
npm run lint
```

현재 기준:

- `data/perks.ts`: 64개
- SQL seed: 64개
- parity mismatch: 0개

## 출시 전에 꼭 끝낼 것

아래는 실제 제출 blocker입니다.

### 1. 공개 Privacy Policy URL

- [ ] [docs/privacy-policy.md](/Users/josh/Desktop/perk/docs/privacy-policy.md)를 공개 URL로 배포
- [x] 공개본에서 내부 메모 / placeholder 제거
- [x] GitHub Pages 배포 워크플로우 준비
- [ ] App Store 제출 폼에 넣을 URL 확정

### 2. Support 경로 확정

- [ ] 지원 이메일을 최종 운영용으로 다시 확인
- [x] support screen / support 문서 초안 준비
- [x] GitHub Pages로 공개 support page 배포 준비
- [ ] support URL을 만들지, 이메일만 쓸지 결정
- [ ] 앱 안 문의 흐름이 실제로 열리는지 실기기에서 확인

현재 앱에 연결된 이메일:

- `zio76152583@gmail.com`

### 3. 작은 화면 / 실기기 QA

- [ ] 작은 iPhone 화면에서 `Home` 확인
- [ ] 작은 iPhone 화면에서 `Explore` 확인
- [ ] 작은 iPhone 화면에서 `Detail` 확인
- [ ] 작은 iPhone 화면에서 `Saved` 확인
- [ ] 작은 iPhone 화면에서 `Profile` 확인
- [ ] `Preferences` / `Notifications` 확인
- [ ] 긴 제목, 긴 provider 이름, 긴 badge 문구 점검
- [ ] 로고 실패 시 initials fallback 확인
- [ ] 외부 링크, 메일, 공유 기능 확인

### 4. TestFlight 빌드 검증

- [x] EAS build 설정 파일 준비
- [x] iOS bundle identifier 준비
- [ ] iOS 빌드 생성
- [ ] TestFlight 업로드
- [ ] 실제 기기에서 첫 실행 확인
- [ ] `Share`, `Mail`, `External URL`, `Saved state` 확인
- [ ] 로고 로딩과 fallback 확인

### 5. App Store 메타데이터 패키지

- [ ] 앱 이름
- [x] 메타데이터 초안 문서 작성
- [ ] 서브타이틀 확정
- [ ] 설명문 확정
- [ ] 키워드 확정
- [ ] 스크린샷
- [ ] 심사 노트
- [ ] 카테고리 및 연령 등급 답변

## 출시 전에 강하게 추천하는 것

이건 blocker는 아니지만, 출시 퀄리티를 분명히 올려줍니다.

### 1. 홈 요약 구조 더 명확히 하기

- [ ] `$340` 같은 숫자를 더 덜 오해되게 다듬기
- [ ] 가능하면 요약을 2~3개 지표로 분리하기

예:

- 정확한 현금형 혜택
- 무료 툴 수
- 장보기 / 주유 리워드 수

### 2. UI 디테일 polish

- [ ] 텍스트 넘침 최종 점검
- [ ] 작은 화면 spacing 점검
- [ ] 아이콘 정렬 점검
- [ ] badge 줄바꿈 점검
- [ ] Detail 화면 CTA 간격 점검

### 3. 데이터 품질 최종 점검

- [ ] source URL 다시 확인
- [ ] 기간 제한 offer expiry 확인
- [ ] 애매한 offer 제거
- [ ] provider / region / badgeText 표현 통일

### 4. README 교체

- [x] Expo 기본 README를 Perk 프로젝트 README로 교체

## 지금은 미뤄도 되는 것

아래는 v1 제출을 늦출 이유가 되지 않습니다.

- 로그인 / 계정 동기화
- 커뮤니티 / 포럼
- 실제 원격 푸시 알림
- 고급 개인화
- 더 큰 카테고리 확장
- 큰 애니메이션 리디자인

## 이번 주 실행 순서

### 오늘

1. Privacy Policy 공개 URL 준비
2. support destination 방식 결정
3. small-screen QA 시작

### 그다음

1. TestFlight 빌드
2. 스크린샷 촬영
3. App Store 카피 확정
4. 제출

## 빠른 Go / No-Go 체크

아래가 모두 참이면 제출 가능 상태로 봅니다.

- [x] `npm run check:seed-parity` 통과
- [ ] Privacy Policy 공개 URL 존재
- [ ] 실제 support destination 존재
- [ ] 테스트한 iPhone에서 큰 레이아웃 깨짐 없음
- [ ] TestFlight 기본 QA 통과
- [ ] App Store 메타데이터 준비 완료

## 내가 추천하는 바로 다음 일

우선순위는 이 순서가 좋습니다.

1. Privacy Policy 공개 URL
2. Small-screen QA
3. TestFlight 빌드
4. App Store 메타데이터 작성
