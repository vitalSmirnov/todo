import { Layout } from 'antd'
import styled, { DefaultTheme } from 'styled-components'

export const StyledLayout = styled(Layout)`
  box-sizing: border-box;
  min-width: 100dvw;
  height: 100%;
  overflow: hidden;
`

export const StyledSider = styled(Layout.Sider)`
  background-color: #ffffff;
  width: fit-content;
  height: 100%;
`

export const StyledHeader = styled(Layout.Header)<{ $theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ $theme }) => $theme.Colors.gray[100]};
  width: 100%;
`

export const StyledContent = styled(Layout.Content)<{ $mobile: boolean; $theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  overflowy: auto;
  overflowx: hidden;
  padding: ${({ $mobile }) => ($mobile ? '16px' : '32px')};
  background-color: ${({ $theme }) => $theme.Colors.gray[200]};
`
