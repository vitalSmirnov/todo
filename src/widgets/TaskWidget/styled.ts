import styled, { DefaultTheme } from 'styled-components'

export const StyledContainer = styled.div<{ $theme: DefaultTheme }>`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: ${({ $theme }) => $theme.borderRadius.roundM};
  background-color: ${({ $theme }) => $theme.Colors.white};
  height: 100%;
`
