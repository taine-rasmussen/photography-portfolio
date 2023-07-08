import { createTheme } from '@mui/material/styles';

import { PaletteOptions } from '@mui/material/styles/createPalette';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const palette: PaletteOptions = {
  primary: {
    main: '#000000',
  },
};

const typography: TypographyOptions = {
};

const themeOptions: ThemeOptions = {
  palette,
  typography,
};

const themeConfig = createTheme(themeOptions);

export default themeConfig;
