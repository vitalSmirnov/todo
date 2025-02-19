import { BarsOutlined, CheckCircleOutlined, RedoOutlined, StarOutlined } from '@ant-design/icons'
import { Flex, Grid } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Routes } from '../../shared/lib/routes'

const NavbarItemLink = styled(NavLink)`
  min-height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: rgb(84, 84, 84);
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  padding: 16px;
  transition: all 0.2s ease-in-out;

  & > div {
    font-size: 16px;
  }

  &.active {
    background-color: rgb(22, 96, 206);
    color: white;
  }

  &:hover {
    background-color: rgb(22, 96, 206);
    color: white;
  }
`

export const Sidebar = () => {
  const screen = Grid.useBreakpoint()
  return (
    <Flex vertical>
      <NavbarItemLink to={Routes.DEFAULT}>
        <BarsOutlined />
        {screen.md && <div>Список задач</div>}
      </NavbarItemLink>
      <NavbarItemLink to={Routes.STARED}>
        <StarOutlined />
        {screen.md && <div>Избранное</div>}
      </NavbarItemLink>
      <NavbarItemLink to={Routes.DONE}>
        <CheckCircleOutlined />
        {screen.md && <div>Завершенные</div>}
      </NavbarItemLink>
      <NavbarItemLink to={Routes.UNDONE}>
        <RedoOutlined />
        {screen.md && <div>Не завершенные</div>}
      </NavbarItemLink>
    </Flex>
  )
}
