import { defaultRebootTheme } from 'styled-reboot';
import colors from './colors';
import fonts from './fonts';
import elevation from './elevation';
import { spacing } from './mixins/spacing';
import media, { mq, breakpoints } from './mixins/media';
import { page } from './elements';

export { default as spacing } from './mixins/spacing';

const theme = {
  colors,
  elevation,
  fonts,
  spacing,
  page,
  media,
  mq,
  ...breakpoints,
};

const customRebootTheme = {
  black: theme.colors.text.default,
  fontFamilyBase: theme.fonts.base,
  fontFamilyMonospace: theme.fonts.monospace,
  fontSizeBase: '18px',
  fontWeightBase: 400,
  lineHeightBase: 1.666,
  bodyColor: theme.colors.text.default,
  bodyBg: theme.colors.background.default,
  headingsMarginBottom: '1.666rem',
  paragraphMarginBottom: '1.666rem',
  labelMarginBottom: '0.5rem',
  dtFontWeight: 700,
  linkColor: theme.colors.link.default,
  linkDecoration: 'none',
  linkHoverColor: theme.colors.link.hover,
  linkHoverDecoration: 'underline',
  tableCellPadding: '0.75rem',
  textMuted: theme.colors.text.muted,
};

const styledTheme = {
  ...defaultRebootTheme,
  ...customRebootTheme,
  ...theme,
};

// Basic colours

export default styledTheme;
