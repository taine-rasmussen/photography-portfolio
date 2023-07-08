import { createTheme } from '@mui/material/styles';

import { PaletteOptions } from '@mui/material/styles/createPalette';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const palette: PaletteOptions = {
  primary: {
    main: '#000000',
  },
  secondary: {
    main: '#fff'
  }
};

const typography: TypographyOptions = {
  fontFamily: 'Playfair Display"',
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
};

const themeOptions: ThemeOptions = {
  palette,
  typography,
};

const themeConfig = createTheme(themeOptions);

export default themeConfig;
