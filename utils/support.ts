import { Alert, Linking } from 'react-native';

export const supportEmail = 'zio76152583@gmail.com';

function encodeMailtoValue(value: string) {
  return encodeURIComponent(value);
}

export function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${supportEmail}?subject=${encodeMailtoValue(subject)}&body=${encodeMailtoValue(body)}`;
}

export async function openSupportMail(subject: string, body: string) {
  const mailtoUrl = buildMailtoUrl(subject, body);

  try {
    const canOpen = await Linking.canOpenURL(mailtoUrl);

    if (!canOpen) {
      Alert.alert('Unable to open email right now.');
      return;
    }

    await Linking.openURL(mailtoUrl);
  } catch {
    Alert.alert('Unable to open email right now.');
  }
}

export async function openBusinessInquiryMail() {
  await openSupportMail(
    'Business inquiry',
    'Hi Perk,\n\nI would like to discuss a business inquiry.\n\nCompany:\nRole:\nWhat you would like to discuss:\n-\n\nThanks.'
  );
}

export async function openGeneralSupportMail() {
  await openSupportMail(
    'Perk support request',
    'Hi Perk,\n\nI need help with:\n-\n\nDevice:\nApp version:\nAnything else:\n-\n\nThanks.'
  );
}
