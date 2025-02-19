import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router/routes'
import { ThemeProvider } from 'styled-components'
import { theme } from '../shared/lib/StyledTheme'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={routes()}></RouterProvider>
  </ThemeProvider>
)
