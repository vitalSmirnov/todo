import { Task } from '../../../types'
import { TaskItemHeader } from '../../../../widgets/TaskItemHeader'
import { StyledCard } from './styled'
import { StatusEnum } from '../../../types/statusEnum'
import { useTheme } from 'styled-components'

type TaskItemProps = {
  todo: Task
}

export const TaskItem = ({ todo }: TaskItemProps) => {
  const theme = useTheme()
  const {
    attributes: { description, status },
  } = todo
  return (
    <StyledCard
      $status={status as StatusEnum}
      $theme={theme}
      title={<TaskItemHeader todo={todo} />}
    >
      <p>{description || ''}</p>
    </StyledCard>
  )
}
