import { extendTheme } from '@chakra-ui/react';

// foundations
import breakpoints from './theme-foundations/breakpoints';
import textStyles from './theme-foundations/textStyles';
import colors from './theme-foundations/colors';

// components
import Button from './theme-components/Button';
import Link from './theme-components/Link';
import Alert from './theme-components/Alert';

const defaultTheme: Record<string, unknown> = {
  styles: {
    global: {},
  },
  breakpoints,
  textStyles,
  colors,
  components: {
    Button,
    Link,
    Alert,
  },
};

export const overrideTheme = (
  customTheme: Record<string, unknown> = {},
): Record<string, unknown> => {
  const theme = { ...defaultTheme, ...customTheme };

  return extendTheme(theme);
};
