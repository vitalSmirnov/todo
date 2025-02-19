import 'styled-components'

declare module 'styled-components' {
  type Palette = {
    100: string
    200: string
    300: string
    400: string
  }

  export interface DefaultTheme {
    Colors: {
      blue: Palette
      red: Palette
      green: Palette
      gray: Palette
      yellow: Palette
      orange: Palette
      white: string
      black: string
      BACKGROUND: string
      shadow: string
    }
    breakpoints: {
      xs: '768px'
      md: '1024px'
      lg: '1366px'
      xl: '1920px'
      xxl: '2560px'
    }
  }
}
