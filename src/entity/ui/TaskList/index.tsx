import InfiniteScroll from 'react-infinite-scroll-component'
import { TaskItem } from './TaskItem'
import { Pagination } from '../../../shared/store/api/dataSource/Pagination'
import { Task } from '../../types'
import { Grid } from 'antd'
import { Loader } from '../../../shared/ui/atoms/Loader'

type TaskFiltersProps = {
  todos: Task[]
  fetchMore: () => void
  pagination: Pagination
}

export const TaskList = ({ todos, fetchMore, pagination }: TaskFiltersProps) => {
  const screen = Grid.useBreakpoint()
  return (
    <InfiniteScroll
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${screen.xs ? '300px' : '400px'}, 1fr))`,
        gap: '16px',
      }}
      dataLength={todos.length}
      hasMore={pagination.page < pagination.pageCount}
      next={fetchMore}
      loader={<Loader />}
    >
      {todos.map(todo => (
        <TaskItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </InfiniteScroll>
  )
}
