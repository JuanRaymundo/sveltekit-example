import Color from 'color';

export default function parseTheme({ primary }) {
  const primaryColor = Color(primary);
  const primaryContrastColor = Color(primaryColor.isLight() ? '#000' : '#fff');

  return {
    primary: primaryColor,
    primaryContrast: primaryContrastColor,
  };
}
