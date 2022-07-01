export function toPx(value: number | undefined | null): string {
  if (!value) {
    return '';
  }

  return `${value}px`;
}
