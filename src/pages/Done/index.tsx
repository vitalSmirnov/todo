import { useEffect } from 'react'
import { useTodoStore } from '../../shared/store/store'
import { TaskList } from '../../entity/ui/TaskList'
import { StatusEnum } from '../../entity/types/statusEnum'
import { EmptyIcon } from '../../shared/ui/atoms/EmptyIcon/index'
import { Typography } from 'antd'

const { Text } = Typography

const DonePage = () => {
  const todos = useTodoStore(state => state.todos)
  const fetch = useTodoStore(state => state.getTodos)
  const pagination = useTodoStore(state => state.pagination)

  const fetchMore = () => {
    fetch({ 'pagination[page]': pagination.page + 1, 'pagination[pageSize]': 25 })
  }

  useEffect(() => {
    fetch({
      'pagination[page]': 1,
      'pagination[pageSize]': 10,
      'filters[status]': `${StatusEnum.COMPLETED}`,
    })
  }, [])

  if (!todos.length) {
    return (
      <EmptyIcon>
        <Text>Задач пока нет</Text>
      </EmptyIcon>
    )
  }

  return (
    <TaskList
      todos={todos}
      fetchMore={fetchMore}
      pagination={pagination}
    />
  )
}

export default DonePage
