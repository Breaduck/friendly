# 정다운교회 홈페이지

대한예수교장로회(통합) 정다운교회 공식 홈페이지.

## 기술 스택

- **Next.js 16** (App Router, `output: 'export'` 정적 배포)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (스크롤 애니메이션)
- **Pretendard Variable** 폰트 (자가호스팅)

## 개발 환경

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # out/ 폴더에 정적 빌드
npm run typecheck  # TypeScript 타입 검사
npm run lint       # ESLint
```

## Cloudflare Pages 배포

1. 이 저장소를 GitHub에 push
2. Cloudflare Pages → "Create application" → "Connect to Git"
3. 빌드 설정:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: `20`
4. 저장소 push 시 자동 배포

## 콘텐츠 수정

실제 데이터는 `src/data/` 폴더의 파일을 수정하면 된다:

| 파일 | 내용 |
|------|------|
| `church.ts` | 교회 이름, 주소, 전화번호, 이메일 |
| `worship.ts` | 예배 시간표 |
| `pastor.ts` | 담임목사 인사말 및 목회 철학 |
| `history.ts` | 교회 연혁 및 3대 비전 |
| `ministries.ts` | 사역 소개 |
| `gallery.ts` | 갤러리 이미지 목록 |

### 이미지 교체

- 히어로 배경: `public/images/hero-placeholder.jpg`
- 목사님 사진: `public/images/pastor-placeholder.jpg`
- 갤러리: `public/images/gallery/placeholder-*.jpg`
- 사역 이미지: `public/images/ministry-*.jpg`
- OG 이미지: `public/og-image.svg` (SNS 공유 이미지, 1200×630 권장)

## V2 계획

Decap CMS 도입으로 목사님이 코드 수정 없이 갤러리 사진을 직접 관리할 수 있게 할 예정.
스왑 지점: `src/lib/gallery-source.ts`
