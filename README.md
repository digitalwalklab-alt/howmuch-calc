# 얼마야 (howmuch.jokerx04.com)

직장인·프리랜서·N잡러를 위한 실전 금융·세무 계산기 8종 (Astro 5 정적 사이트, 서버·API 비용 0원).

## 포함된 계산기 (8종)
- `/year-end-tax/` — 연말정산 환급·절세 시뮬레이터 (카드 25% · 연금저축/IRP · 월세)
- `/freelancer-tax/` — 프리랜서 3.3% 실수령액 & 종합소득세 환급 계산기
- `/njob-tax/` — 직장인 + 부업(N잡) 합산 종합소득세 시뮬레이터
- `/vat-compare/` — 간이과세자 vs 일반과세자 부가가치세 비교기
- `/severance-total/` — 퇴사 시 총 수령액 통합 계산기 (퇴직금 + 연차수당 + 실업급여)
- `/salary-compare/` — 이직 연봉 협상 월 실수령액 비교기
- `/jeonse-vs-wolse/` — 전세 vs 월세 진짜 손익 비교기
- `/loan-calc/` — 대출 이자 · 상환방식 비교 계산기 (원리금균등·원금균등·만기일시)

## 로컬 실행 & 빌드
```bash
npm install
npm run dev
npm run check
npm run build
```

## Cloudflare Pages 배포 설정
- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Custom domain:** `howmuch.jokerx04.com` (DNS CNAME 연결)

## Google AdSense 활성화 체크리스트
1. `src/layouts/BaseLayout.astro`의 `<head>` 내 AdSense `<script>` 주석 해제 후 본인 `ca-pub-XXXXXXXXXXXXXXXX` 입력
2. `public/ads.txt`의 주석 해제 후 본인 `pub-XXXXXXXXXXXXXXXX` 입력
3. 변경 사항 커밋 & 푸시 → Cloudflare Pages 자동 재배포
