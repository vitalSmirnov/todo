import styled, { DefaultTheme } from 'styled-components'

export const StyledContainer = styled.div<{ $theme: DefaultTheme }>`
  box-sizing: border-box;
  width: 100dvw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ $theme }) => $theme.Colors.white};
`
