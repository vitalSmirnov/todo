import { DeleteOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { useTheme } from 'styled-components'
import { ModalComponent } from '../../shared/ui/atoms/Modal'
import { useState } from 'react'
import { useTodoStore } from '../../shared/store/store'

type DeleteTodoProps = {
  taskId: number
}

export const DeleteTodo = ({ taskId }: DeleteTodoProps) => {
  const theme = useTheme()
  const [open, setOpen] = useState<boolean>(false)

  const deleteTodo = useTodoStore(state => state.deleteTodo)

  const submitDelete = () => {
    deleteTodo(taskId)
    setOpen(false)
  }
  return (
    <>
      <Button
        type='link'
        danger
        style={{ color: theme.Colors.red[200] }}
        icon={<DeleteOutlined style={{ fill: theme.Colors.red[200] }} />}
        onClick={() => setOpen(true)}
      >
        Удалить
      </Button>
      <ModalComponent
        title='Удаление задачи'
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p>{`Вы уверены, что хотите удалить задачу ${taskId}?`}</p>
        <Flex gap={'16px'}>
          <Button
            type='primary'
            danger
            onClick={submitDelete}
          >
            Удалить
          </Button>
          <Button
            type='default'
            onClick={() => setOpen(false)}
          >
            Отмена
          </Button>
        </Flex>
      </ModalComponent>
    </>
  )
}
