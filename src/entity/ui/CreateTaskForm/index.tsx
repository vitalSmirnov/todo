import { Button, Flex, Form, Input, Select } from 'antd'
import { StatusEnum } from '../../types/statusEnum'
import { EditTaskModel } from '../../../shared/store/api/dataSource/EditTaskModel'

const options = [
  {
    key: StatusEnum.NEWS,
    label: 'Новый',
  },
  {
    key: StatusEnum.PENDING,
    label: 'В процессе',
  },
  {
    key: StatusEnum.COMPLETED,
    label: 'Завершен',
  },
  {
    key: StatusEnum.CANCELLED,
    label: 'Отменен',
  },
  {
    key: StatusEnum.NOT_COMPLETED,
    label: 'Не завершено',
  },
]
type CreateTaskFormProps = {
  onSubmit: (values: EditTaskModel) => void
  defaultValues?: EditTaskModel
}

export const CreateTaskForm = ({
  onSubmit,
  defaultValues = {
    title: 'Название',
    description: '',
    status: StatusEnum.NEWS,
  },
}: CreateTaskFormProps) => {
  const [form] = Form.useForm<EditTaskModel>()

  const handleCreateTodo = (values: EditTaskModel) => {
    onSubmit(values)
  }

  return (
    <Form
      form={form}
      onFinish={handleCreateTodo}
      initialValues={defaultValues}
      layout='vertical'
    >
      <Form.Item
        name='title'
        label={'Название'}
        rules={[{ required: true, message: 'Введите название' }]}
      >
        <Input placeholder='Название' />
      </Form.Item>
      <Form.Item
        name='description'
        label={'Описание'}
      >
        <Input placeholder='Description' />
      </Form.Item>
      <Form.Item
        name='status'
        label={'Статус'}
        rules={[{ required: true, message: 'Выберите статус' }]}
      >
        <Select options={options} />
      </Form.Item>
      <Form.Item>
        <Flex gap={'16px'}>
          <Button
            type='primary'
            htmlType='submit'
          >
            Создать
          </Button>
          <Button>Отмена</Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}
