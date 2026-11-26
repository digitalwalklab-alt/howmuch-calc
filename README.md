# 얼마야 — 직장인·N잡러 실전 금융·세무 계산기

> **라이브 사이트:** https://howmuch.jokerx04.com/

직장인·프리랜서·N잡러가 자주 찾는 금융·세무·급여·주거 계산기 **8종**과 실전 가이드 **4편**을 제공하는 정적 웹 서비스입니다.  
모든 계산은 브라우저(클라이언트) 내부에서 즉시 처리되며, 입력값은 어떠한 서버에도 전송되거나 저장되지 않습니다.

---

## 주요 기능

### 1. 실전 금융·세무 계산기 (8종)
| 카테고리 | 경로 | 설명 |
| :--- | :--- | :--- |
| 세무 · N잡 | [`/year-end-tax/`](https://howmuch.jokerx04.com/year-end-tax/) | 연말정산 환급·절세 시뮬레이터 (카드 25% · 연금저축/IRP · 월세) |
| 세무 · N잡 | [`/freelancer-tax/`](https://howmuch.jokerx04.com/freelancer-tax/) | 프리랜서 3.3% 실수령액 & 종합소득세 환급 계산기 (건별 역산 포함) |
| 세무 · N잡 | [`/njob-tax/`](https://howmuch.jokerx04.com/njob-tax/) | 직장인 + 부업(N잡) 합산 종합소득세 & 건보료 2,000만 원 시뮬레이터 |
| 세무 · N잡 | [`/vat-compare/`](https://howmuch.jokerx04.com/vat-compare/) | 간이과세자 vs 일반과세자 부가가치세 유불리 비교기 |
| 퇴사 · 급여 | [`/severance-total/`](https://howmuch.jokerx04.com/severance-total/) | 퇴사 시 총 수령액 통합 계산기 (퇴직금 + 미사용 연차수당 + 실업급여) |
| 퇴사 · 급여 | [`/salary-compare/`](https://howmuch.jokerx04.com/salary-compare/) | 이직 연봉 협상 월 실수령액 비교기 (4대보험 · 세후 월급 차이) |
| 주거 · 대출 | [`/jeonse-vs-wolse/`](https://howmuch.jokerx04.com/jeonse-vs-wolse/) | 전세 vs 월세 진짜 손익 비교기 (대출이자 · 보증금 기회비용 · 손익분기 월세) |
| 주거 · 대출 | [`/loan-calc/`](https://howmuch.jokerx04.com/loan-calc/) | 대출 이자 · 3대 상환방식 비교 계산기 (원리금균등 · 원금균등 · 만기일시) |

### 2. 실전 가이드 (`/guide/`)
- [`/guide/year-end-tax-card-25/`](https://howmuch.jokerx04.com/guide/year-end-tax-card-25/) — 2026 연말정산 신용카드 25% 황금비율 & 체크카드 전환 시점 총정리
- [`/guide/njob-health-insurance-2000/`](https://howmuch.jokerx04.com/guide/njob-health-insurance-2000/) — 직장인 부업(N잡) 건강보험료 2,000만 원 기준과 5월 종소세 절세 전략
- [`/guide/jeonse-vs-wolse-checklist/`](https://howmuch.jokerx04.com/guide/jeonse-vs-wolse-checklist/) — 전세 vs 월세 결정 전 꼭 따져야 할 기회비용·손익분기 월세 계산법
- [`/guide/severance-unemployment-tips/`](https://howmuch.jokerx04.com/guide/severance-unemployment-tips/) — 퇴사 전 반드시 챙겨야 할 퇴직금·미사용 연차수당·실업급여 체크리스트

### 3. UX · SEO · 보안
- **원 단위 실시간 콤마 입력:** 모든 금액 입력창에 천 단위 콤마, 실시간 한글 금액 보조 표시, 포커스 자동 선택, 모바일 숫자 키패드 적용
- **공유 & 복사:** 결과 복사 시 사이트 링크 자동 포함 및 네이티브 링크 공유 지원
- **모바일 UX:** 상단 메뉴 터치/마우스 드래그 슬라이드 및 3px 진행 인디케이터 바, WCAG AA 명도 대비 적용
- **SEO & PWA:** `sitemap.xml`, `sitemap-index.xml`, `rss.xml`, `robots.txt`, `og-image.png`, `site.webmanifest`, JSON-LD (`WebSite` · `WebApplication` · `FAQPage` · `BreadcrumbList` · `Article`)
- **보안:** 100% 정적 사이트(입력값 서버 미전송), `npm audit` 취약점 0건, `referrer` 정책 및 JSON-LD 이스케이프 적용

---

## 기술 스택
- **Framework:** Astro (Static Output) + TypeScript
- **Hosting & CI/CD:** GitHub Pages + GitHub Actions (Node 24, `main` 브랜치 푸시 시 자동 배포)
- **Custom Domain:** `howmuch.jokerx04.com` (HTTPS 강제 적용)

---

## 로컬 실행 & 빌드
> Node.js `>= 22.23.4` 권장

```bash
npm install
npm run dev      # 로컬 개발 서버 실행
npm run check    # Astro / TypeScript 타입 체크
npm run build    # dist/ 정적 사이트 빌드
npm run preview  # 빌드 결과 로컬 미리보기
```

---

## 유의사항
본 사이트의 모든 계산 결과와 가이드는 일반적인 법령 및 기준에 따른 참고용 시뮬레이션입니다. 실제 세액·급여·대출 조건은 홈택스, 고용24, 관할 세무사 및 금융기관을 통해 최종 확인하시기 바랍니다.
