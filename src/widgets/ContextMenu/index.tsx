import { MoreOutlined } from '@ant-design/icons'
import { Button, Flex, List, Popover } from 'antd'
import { Task } from '../../entity/types'
import { DeleteTodo } from '../../features/DeleteTodo'
import { EditTodo } from '../../features/EditTodo'

type ContentProps = {
  todo: Task
}

const Content = ({ todo: { id, attributes } }: ContentProps) => {
  return (
    <List>
      <Flex
        vertical
        align='flex-start'
      >
        <EditTodo todo={{ id, attributes }} />
        <DeleteTodo taskId={id} />
      </Flex>
    </List>
  )
}

export const ContextMenu = (todo: ContentProps) => {
  return (
    <Popover content={Content(todo)}>
      <Button
        style={{ width: 'fit-content', height: 'fit-content' }}
        type='text'
      >
        <MoreOutlined />
      </Button>
    </Popover>
  )
}
