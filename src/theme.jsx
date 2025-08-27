import { createTheme } from '@mui/material/styles';

const theme = createTheme({
typography: {
  fontFamily: 'Dirooz, Arial, sans-serif',

  h1: {
    fontSize: '32px',
    fontWeight: 700,
  },
  h2: {
    fontSize: '28px',
    fontWeight: 600,
  },
  h3: {
    fontSize: '24px',
    fontWeight: 600,
  },
  h4: {
    fontSize: '20px',
    fontWeight: 500,
  },
  h5: {
    fontSize: '18px',
    fontWeight: 500,
  },
  h6: {
    fontSize: '16px',
    fontWeight: 500,
  },

  subtitle1: {
    fontSize: '14px',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '13px',
    fontWeight: 400,
  },

  body1: {
    fontSize: '14px',
    fontWeight: 400,
  },
  body2: {
    fontSize: '13px',
    fontWeight: 400,
  },

  button: {
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none', // برای جلوگیری از بزرگ‌نویسی حروف
  },

  caption: {
    fontSize: '12px',
    fontWeight: 300,
  },
},

  palette: {
    mode: 'light',
    background: {
      default: '##f9fbff', // فقط رنگ پس‌زمینه کل صفحه
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;
