import { StarFilled, StarOutlined } from '@ant-design/icons'
import { useTodoStore } from '../../shared/store/store'
import { Button } from 'antd'
import styled, { useTheme } from 'styled-components'
import { Task } from '../../entity/types'

type StaredItemProps = {
  todo: Task
}

type isStarHandler = {
  isStar: Boolean
}

const StarIcon = ({ isStar }: isStarHandler) => {
  const theme = useTheme()
  return isStar ? (
    <StarFilled style={{ color: theme.Colors.orange[400] }} />
  ) : (
    <StarOutlined style={{ color: theme.Colors.orange[400] }} />
  )
}

export const StaredItem = ({ todo }: StaredItemProps) => {
  const stared = useTodoStore(state => state.staredTodos)
  const setStar = useTodoStore(state => state.setStar)
  const unsetStar = useTodoStore(state => state.unsetStar)

  const isStared = stared.some(item => item.id === todo.id)

  const addStarHandler = () => {
    isStared ? unsetStar(todo) : setStar(todo)
  }

  return (
    <StyledButton onClick={addStarHandler}>
      <StarIcon isStar={isStared} />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border: transparent;
  background: transparent;
`
