// Shared spacing tokens and a tiny responsive clamp helper.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  screenMin: 17,
  screenMax: 20,
  sectionGap: 16,
  heroGap: 10,
  bottomTabOffset: 10,
  bottomScrollPadding: 92,
  detailBottomPadding: 124,
  buttonHeight: 54,
} as const;

export function clampSize(width: number, min: number, max: number, ratio: number) {
  return Math.max(min, Math.min(max, width * ratio));
}
