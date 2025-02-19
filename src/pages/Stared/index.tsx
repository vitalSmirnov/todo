import { useTodoStore } from '../../shared/store/store'
import { List, Typography } from 'antd'
import { TaskItem } from '../../entity/ui/TaskList/TaskItem'
import { EmptyIcon } from '../../shared/ui/atoms/EmptyIcon'

const { Text } = Typography

const StaredPage = () => {
  const todos = useTodoStore(state => state.staredTodos)

  if (!todos.length) {
    return (
      <EmptyIcon>
        <Text>Избранных задач пока нет</Text>
      </EmptyIcon>
    )
  }

  return (
    <List
      split={false}
      grid={{ gutter: 16, column: 2 }}
    >
      {todos.map(todo => (
        <List.Item key={todo.id}>
          <TaskItem todo={todo} />
        </List.Item>
      ))}
    </List>
  )
}

export default StaredPage
