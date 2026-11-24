/**
 * Shared Korean Won (원) formatting and live comma input helpers.
 * All calculations run 100% client-side with zero external dependencies.
 */

export function parseWon(raw: string | number | null | undefined): number {
  if (typeof raw === 'number') {
    return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 0;
  }
  if (!raw) return 0;
  const trimmed = String(raw).trim();
  if (trimmed.startsWith('-')) return 0;
  const digits = trimmed.replace(/[^0-9]/g, '');
  if (!digits) return 0;
  const val = Number(digits);
  return Number.isFinite(val) && val > 0 ? Math.min(val, 100_000_000_000_000) : 0;
}

export function formatNumber(n: number): string {
  const safe = Number.isFinite(n) ? Math.round(n) : 0;
  return safe.toLocaleString('ko-KR');
}

export function formatWon(n: number): string {
  return `${formatNumber(n)}원`;
}

export function formatKoreanUnit(won: number): string {
  const v = Math.floor(Math.max(0, won));
  if (v === 0) return '0원';
  const eok = Math.floor(v / 100_000_000);
  const man = Math.floor((v % 100_000_000) / 10_000);
  const rem = v % 10_000;

  const parts: string[] = [];
  if (eok > 0) parts.push(`${eok.toLocaleString('ko-KR')}억`);
  if (man > 0) parts.push(`${man.toLocaleString('ko-KR')}만`);
  if (rem > 0 && eok === 0) parts.push(`${rem.toLocaleString('ko-KR')}`);
  return parts.length > 0 ? `${parts.join(' ')}원` : '0원';
}

export function setWonInputValue(input: HTMLInputElement, won: number): void {
  const safe = Math.max(0, Math.floor(won));
  input.value = safe === 0 ? '0' : safe.toLocaleString('ko-KR');
}

/**
 * Binds live comma formatting to a text/numeric input while preserving caret position,
 * updates an optional Korean unit hint element, and triggers onChange.
 */
export function bindWonInput(
  input: HTMLInputElement,
  onChange: () => void,
  hintEl?: HTMLElement | null
): void {
  const syncHint = (val: number) => {
    if (hintEl) {
      hintEl.textContent = formatKoreanUnit(val);
    }
  };

  // Format initial value
  const initialVal = parseWon(input.value);
  setWonInputValue(input, initialVal);
  syncHint(initialVal);

  input.addEventListener('input', () => {
    const raw = input.value;
    const caret = input.selectionStart ?? raw.length;
    const digitsBeforeCaret = raw.slice(0, caret).replace(/[^0-9]/g, '').length;

    const val = parseWon(raw);
    const formatted = raw.trim() === '' ? '' : val.toLocaleString('ko-KR');
    input.value = formatted;

    // Restore caret position based on digit count
    if (document.activeElement === input && formatted.length > 0) {
      let seen = 0;
      let newPos = formatted.length;
      for (let i = 0; i < formatted.length; i++) {
        if (/[0-9]/.test(formatted[i])) {
          seen++;
          if (seen >= digitsBeforeCaret) {
            newPos = digitsBeforeCaret === 0 ? 0 : i + 1;
            break;
          }
        }
      }
      if (digitsBeforeCaret === 0) newPos = 0;
      try {
        input.setSelectionRange(newPos, newPos);
      } catch {
        // Ignore on unsupported input types
      }
    }

    syncHint(val);
    onChange();
  });

  input.addEventListener('blur', () => {
    const val = parseWon(input.value);
    setWonInputValue(input, val);
    syncHint(val);
    onChange();
  });
}

const SITE_ORIGIN = 'https://howmuch.jokerx04.com';

export async function copySummaryWithUrl(
  summary: string,
  path: string,
  btn: HTMLButtonElement
): Promise<void> {
  const url = `${SITE_ORIGIN}${path}`;
  const fullText = `${summary}\n👉 직접 계산하기: ${url}`;
  try {
    await navigator.clipboard.writeText(fullText);
    btn.textContent = '복사 완료!';
  } catch {
    btn.textContent = '복사 실패';
  }
  setTimeout(() => (btn.textContent = '결과 복사'), 1500);
}

export async function shareCalculator(
  title: string,
  summary: string,
  path: string,
  btn: HTMLButtonElement
): Promise<void> {
  const url = `${SITE_ORIGIN}${path}`;
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({ title, text: summary, url });
      return;
    } catch {
      // User cancelled or share failed; fall through to clipboard copy
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    btn.textContent = '링크 복사됨!';
  } catch {
    btn.textContent = '공유 실패';
  }
  setTimeout(() => (btn.textContent = '링크 공유'), 1500);
}
