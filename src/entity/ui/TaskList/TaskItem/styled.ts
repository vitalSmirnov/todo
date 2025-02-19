import styled, { css, DefaultTheme } from 'styled-components'
import { StatusEnum } from '../../../types/statusEnum'
import { Card } from 'antd'

export const StyledCard = styled(Card)<{ $theme: DefaultTheme; $status: StatusEnum }>`
  box-shadow: 0 0 5px ${({ $theme }) => $theme.Colors.shadow};
  transition: all 0.3s;
  box-sizing: border-box;

  & > .ant-card-head {
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
  }
  & > .ant-card-body > p {
    padding: 0 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    box-shadow: 0 0 2px ${({ $theme }) => $theme.Colors.white};
  }

  ${({ $status, $theme }) => {
    if ($status === StatusEnum.COMPLETED) {
      return css`
        background-color: ${$theme.Colors.gray[100]};
        border-color: ${$theme.Colors.gray[100]};
      `
    }
  }};
`
