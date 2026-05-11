export type BrandLogoKey =
  | 'westpac'
  | 'stgeorge'
  | 'bankofmelbourne'
  | 'banksa'
  | 'commbank'
  | 'github'
  | 'jetbrains'
  | 'figma'
  | 'notion'
  | 'canva'
  | 'aws'
  | 'spotify'
  | 'apple'
  | 'unidays'
  | 'studentedge'
  | 'optus'
  | 'adobe'
  | 'autodesk'
  | 'translink'
  | 'ptv';

export type BrandLogoConfig = {
  initials: string;
  brandColor: string;
  backgroundColor: string;
  assetPath?: string;
};

export const brandLogos: Record<BrandLogoKey, BrandLogoConfig> = {
  westpac: {
    initials: 'W',
    brandColor: '#D5002B',
    backgroundColor: '#FFF1F3',
  },
  stgeorge: {
    initials: 'SG',
    brandColor: '#E31B23',
    backgroundColor: '#FFF2F3',
  },
  bankofmelbourne: {
    initials: 'BM',
    brandColor: '#A11F57',
    backgroundColor: '#FFF1F8',
  },
  banksa: {
    initials: 'BSA',
    brandColor: '#E31B23',
    backgroundColor: '#FFF1F3',
  },
  commbank: {
    initials: 'CB',
    brandColor: '#8A6A00',
    backgroundColor: '#FFF8D6',
  },
  github: {
    initials: 'GH',
    brandColor: '#111111',
    backgroundColor: '#F2F2F2',
  },
  jetbrains: {
    initials: 'JB',
    brandColor: '#111111',
    backgroundColor: '#F4F1FF',
  },
  figma: {
    initials: 'F',
    brandColor: '#111111',
    backgroundColor: '#FFF2EF',
  },
  notion: {
    initials: 'N',
    brandColor: '#111111',
    backgroundColor: '#F4F4F4',
  },
  canva: {
    initials: 'C',
    brandColor: '#00A9CE',
    backgroundColor: '#EDF9FF',
  },
  aws: {
    initials: 'AWS',
    brandColor: '#FF9900',
    backgroundColor: '#FFF6E8',
  },
  spotify: {
    initials: 'S',
    brandColor: '#1DB954',
    backgroundColor: '#E9FBEF',
  },
  apple: {
    initials: 'A',
    brandColor: '#111111',
    backgroundColor: '#F4F4F4',
  },
  unidays: {
    initials: 'U',
    brandColor: '#6C4DFF',
    backgroundColor: '#F2EEFF',
  },
  studentedge: {
    initials: 'SE',
    brandColor: '#00B26B',
    backgroundColor: '#ECFBF4',
  },
  optus: {
    initials: 'O',
    brandColor: '#7A5C00',
    backgroundColor: '#FFF8D6',
  },
  adobe: {
    initials: 'AD',
    brandColor: '#FF0000',
    backgroundColor: '#FFF1F1',
  },
  autodesk: {
    initials: 'ADK',
    brandColor: '#0696D7',
    backgroundColor: '#EDF8FF',
  },
  translink: {
    initials: 'T',
    brandColor: '#005EB8',
    backgroundColor: '#EEF6FF',
  },
  ptv: {
    initials: 'PTV',
    brandColor: '#0057B8',
    backgroundColor: '#EEF6FF',
  },
};
