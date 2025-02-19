import { Checkbox } from 'antd'
import { useTodoStore } from '../../shared/store/store'
import { Task } from '../../entity/types'
import { StatusEnum } from '../../entity/types/statusEnum'

type CompleteTodoProps = Task

export const CompleteTodo = ({ id, attributes }: CompleteTodoProps) => {
  const { status } = attributes
  const setDone = useTodoStore(state => state.toggleTodo)

  const handleClick = () => {
    if (status !== StatusEnum.COMPLETED) {
      setDone(id, { status: StatusEnum.COMPLETED, title: attributes.title, description: attributes.description })
    } else {
      setDone(id, { status: StatusEnum.PENDING, title: attributes.title, description: attributes.description })
    }
  }

  return (
    <Checkbox
      onChange={handleClick}
      checked={status === StatusEnum.COMPLETED}
    />
  )
}
