import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTheme } from 'styled-components'
import { ModalComponent } from '../../shared/ui/atoms/Modal'
import { useState } from 'react'
import { useTodoStore } from '../../shared/store/store'
import { Task } from '../../entity/types'
import { CreateTaskForm } from '../../entity/ui/CreateTaskForm'
import { EditTaskModel } from '../../shared/store/api/dataSource/EditTaskModel'

type EditTodoProps = {
  todo: Task
}

export const EditTodo = ({ todo: { id, attributes } }: EditTodoProps) => {
  const theme = useTheme()
  const [open, setOpen] = useState<boolean>(false)

  const editTodo = useTodoStore(state => state.editTodo)

  const submitEdit = (e: EditTaskModel) => {
    editTodo(id, e)
    setOpen(false)
  }
  return (
    <>
      <Button
        type='link'
        style={{ color: theme.Colors.blue[300] }}
        icon={<EditOutlined style={{ fill: theme.Colors.blue[300] }} />}
        onClick={() => setOpen(true)}
      >
        Редактировать
      </Button>
      <ModalComponent
        title='Редактирование задачи'
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <CreateTaskForm
          defaultValues={attributes}
          onSubmit={submitEdit}
        />
      </ModalComponent>
    </>
  )
}
