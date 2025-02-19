import { Button } from 'antd'
import { useTodoStore } from '../../shared/store/store'
import { EditTaskModel } from '../../shared/store/api/dataSource/EditTaskModel'
import { useState } from 'react'
import { ModalComponent } from '../../shared/ui/atoms/Modal'
import { CreateTaskForm } from '../../entity/ui/CreateTaskForm'
import { FileAddOutlined } from '@ant-design/icons'

export const CreateTask = () => {
  const [open, setOpen] = useState<boolean>(false)

  const createTask = useTodoStore(state => state.createTodo)

  const handleCreateTodo = (values: EditTaskModel) => {
    createTask(values).then(() => setOpen(false))
  }

  return (
    <div style={{ padding: '8px' }}>
      <Button
        type={'primary'}
        onClick={() => setOpen(!open)}
        style={{ marginBottom: '16px' }}
      >
        <FileAddOutlined />
        <span>Новая задача</span>
      </Button>
      <ModalComponent
        isOpen={open}
        onClose={() => setOpen(false)}
        title={'Новая задача'}
      >
        <CreateTaskForm onSubmit={handleCreateTodo} />
      </ModalComponent>
    </div>
  )
}
