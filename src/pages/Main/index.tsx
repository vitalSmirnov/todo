import { useEffect } from 'react'
import { TaskList } from '../../entity/ui/TaskList'
import { useTodoStore } from '../../shared/store/store'

const MainPage = () => {
  const todos = useTodoStore(state => state.todos)
  const fetch = useTodoStore(state => state.getTodos)
  const pagination = useTodoStore(state => state.pagination)

  const fetchMore = () => {
    fetch({ 'pagination[page]': pagination.page + 1, 'pagination[pageSize]': 25 })
  }

  useEffect(() => {
    fetch({ 'pagination[page]': 1, 'pagination[pageSize]': 10 })
  }, [])

  return (
    <TaskList
      todos={todos}
      fetchMore={fetchMore}
      pagination={pagination}
    />
  )
}

export default MainPage
