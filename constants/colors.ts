const badgeToneColors = {
  green: {
    background: '#EEF9F1',
    text: '#109454',
  },
  orange: {
    background: '#FFF4EA',
    text: '#F58A26',
  },
  yellow: {
    background: '#FFF8DC',
    text: '#8A6A00',
  },
  blue: {
    background: '#EAF4FF',
    text: '#2B95C9',
  },
  red: {
    background: '#FFF1F1',
    text: '#DB2F2F',
  },
  purple: {
    background: '#F3EFFF',
    text: '#7B68FF',
  },
} as const;

const categoryToneColors = {
  purple: {
    background: '#F3EFFF',
    icon: '#7B68FF',
  },
  orange: {
    background: '#FFF4EA',
    icon: '#F58A26',
  },
  blue: {
    background: '#EAF8FF',
    icon: '#111827',
  },
  green: {
    background: '#EDFAEA',
    icon: '#109454',
  },
  yellow: {
    background: '#FFF8DC',
    icon: '#101010',
  },
  pink: {
    background: '#FFECEC',
    icon: '#F05262',
  },
} as const;

export const colors = {
  background: '#FFFFFF',
  text: '#111111',
  textSoft: '#697386',
  textMuted: '#99A1B2',
  card: '#FFFFFF',
  border: '#F1F2F6',
  shadow: '#101010',
  lime: '#E2F65E',
  limeSoft: '#F3FFB5',
  limeGlow: 'rgba(228, 246, 111, 0.34)',
  green: '#109454',
  greenSoft: '#EEF9F1',
  purple: '#7B68FF',
  purpleSoft: '#F3EFFF',
  orange: '#F58A26',
  orangeSoft: '#FFF4EA',
  blue: '#2B95C9',
  blueSoft: '#EAF8FF',
  yellowSoft: '#FFF8DC',
  pinkSoft: '#FFECEC',
  tabInactive: '#9AA1B2',
  chevron: '#B8BECA',
};

export { badgeToneColors, categoryToneColors };
