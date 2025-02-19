import { Grid, Layout } from 'antd'
import { StyledContent, StyledHeader, StyledLayout, StyledSider } from './styled'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { Navbar } from '../Navbar'
import { useTheme } from 'styled-components'

export const AppLayout = () => {
  const theme = useTheme()
  const screen = Grid.useBreakpoint()
  return (
    <StyledLayout>
      <StyledHeader $theme={theme}>
        <Navbar />
      </StyledHeader>
      <Layout>
        <StyledSider width={screen.xs ? 'fit-content' : '15%'}>
          <Sidebar />
        </StyledSider>
        <Suspense>
          <StyledContent
            $mobile={!!(screen.xs || screen.sm)}
            $theme={theme}
          >
            <Outlet />
          </StyledContent>
        </Suspense>
      </Layout>
    </StyledLayout>
  )
}
