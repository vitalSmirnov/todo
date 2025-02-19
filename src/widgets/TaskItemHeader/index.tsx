import { Flex, Typography } from 'antd'
import { Task } from '../../entity/types'
import { StaredItem } from '../../features/Stared'
import { SetStatus } from '../../features/SetStatus'
import { CompleteTodo } from '../../features/CompleteTodo'
import { ContextMenu } from '../ContextMenu'
import { StyledGrid } from './styled'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Routes } from '../../shared/lib/routes'

const { Title } = Typography
type TaskItemProps = {
  todo: Task
}

export const TaskItemHeader = ({ todo }: TaskItemProps) => {
  const { id, attributes } = todo
  const theme = useTheme()
  return (
    <StyledGrid>
      <Flex
        gap={'8px'}
        align='center'
      >
        <StaredItem todo={todo} />
        <Title
          style={{ margin: '0 0', textWrap: 'balance', wordBreak: 'keep-all' }}
          level={4}
        >
          <Link
            style={{ color: theme.Colors.black }}
            to={Routes.TASK.replace(':taskId', id.toString())}
          >
            {attributes.title}
          </Link>
        </Title>
      </Flex>
      <Flex
        gap={'8px'}
        align='center'
      >
        <SetStatus todo={todo} />
        <CompleteTodo
          id={id}
          attributes={attributes}
        />
        <ContextMenu todo={todo} />
      </Flex>
    </StyledGrid>
  )
}
