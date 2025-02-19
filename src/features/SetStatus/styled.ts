import { Badge } from 'antd'
import styled, { css, DefaultTheme } from 'styled-components'

export const BadgeStyled = styled(Badge)<{ $color: string; $token: DefaultTheme }>`
  ${({ $color, $token }) => {
    switch ($color) {
      case 'В процессе': {
        return css`
          color: ${$token.Colors.yellow[400]};
          border-color: ${$token.Colors.yellow[400]};
        `
      }
      case 'Новый': {
        return css`
          color: ${$token.Colors.blue[400]};
          border-color: ${$token.Colors.blue[400]};
        `
      }
      case 'Отменен': {
        return css`
          color: ${$token.Colors.red[400]};
          border-color: ${$token.Colors.red[400]};
        `
      }
      default: {
      }
    }
  }};

  border: 1px solid;
  padding: 4px 6px;
  cursor: pointer;
  font-size: 12px;
  text-wrap: nowrap;

  ${({ $token }) => `border-radius: ${$token.borderRadius.roundS};`};
`
