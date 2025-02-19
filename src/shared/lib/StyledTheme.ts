import { DefaultTheme } from 'styled-components/dist/types'

export const theme: DefaultTheme = {
  colors: {
    deepBlue: '#0d2c54',
    red: '#ff0000',
    gray200: '#f4f4f4',
    green: '#00ff00',
    gray50: '#f9f9f9',
    black: '#000000',
  },
  borderRadius: {
    roundL: '32px',
    roundM: '16px',
    roundS: '8px',
  },
  fonts: {
    comfortaa: 'Comfortaa, serif',
  },
  transitions: {
    easyInOut: 'all 0.2s ease-in-out 0.3s',
  },
  Colors: {
    blue: {
      100: '#4F75FF',
      200: '#A1E3F9',
      300: '#578FCA',
      400: '#3674B5',
    },
    red: {
      100: '',
      200: '#FF8080',
      300: '#FB4141',
      400: '#B80000',
    },
    green: {
      100: '#D1F8EF',
      200: '',
      300: '#5CB338',
      400: '#16C47F',
    },
    gray: {
      100: '#f5f5f5',
      200: '#d3d3d3',
      300: '#808080',
      400: '#696969',
    },
    yellow: {
      100: '',
      200: '',
      300: '#ECE852',
      400: '#FFD65A',
    },
    orange: {
      100: '',
      200: '#FFC145',
      300: '#FF9D23',
      400: '#F93827',
    },
    white: '#ffffff',
    black: '#2b2b2b',
    shadow: 'rgba(0, 0, 0, 0.1)',
    BACKGROUND: '',
  },
  breakpoints: {
    xs: '768px',
    md: '1024px',
    lg: '1366px',
    xl: '1920px',
    xxl: '2560px',
  },
}
