import { Flex, Popover } from 'antd'
import { useTheme } from 'styled-components'
import { BadgeStyled } from './styled'
import { useTodoStore } from '../../shared/store/store'
import { Task } from '../../entity/types'
import { StatusEnum } from '../../entity/types/statusEnum'

type SetStatusProps = {
  todo: Task
}

const statuses = [
  StatusEnum.CANCELLED,
  StatusEnum.COMPLETED,
  StatusEnum.NOT_COMPLETED,
  StatusEnum.PENDING,
  StatusEnum.NEWS,
]

const Content = ({ todo: { id, attributes } }: SetStatusProps) => {
  const { status, title, description } = attributes
  const stArray = statuses.filter(item => item !== status)
  const editStatus = useTodoStore(state => state.editTodo)

  const handleChangeStatus = (item: string) => {
    editStatus(id, { status: item, title, description })
  }

  return (
    <Flex
      vertical
      gap={'8px'}
    >
      {stArray.map(item => (
        <BadgeStyled
          onClick={() => handleChangeStatus(item)}
          $color={item}
          $token={useTheme()}
          key={item}
        >
          {item}
        </BadgeStyled>
      ))}
    </Flex>
  )
}

export const SetStatus = ({ todo }: SetStatusProps) => {
  const theme = useTheme()

  const {
    attributes: { status },
  } = todo
  return (
    <Popover content={Content({ todo })}>
      <BadgeStyled
        $color={status}
        $token={theme}
      >
        {status}
      </BadgeStyled>
    </Popover>
  )
}
