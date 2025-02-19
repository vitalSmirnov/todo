import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { BackButton } from '../../shared/ui/atoms/BackButton'
import { Flex, Typography } from 'antd'
import { useTodoStore } from '../../shared/store/store'
import { useEffect, useState } from 'react'
import { SetStatus } from '../../features/SetStatus'
import { DeleteTodo } from '../../features/DeleteTodo'
import { EditTodo } from '../../features/EditTodo'
import { Loader } from '../../shared/ui/atoms/Loader'
import { StyledContainer } from './styled'

const { Title, Paragraph } = Typography

export const TaskWidget = () => {
  const theme = useTheme()
  const { taskId } = useParams<{ taskId: string }>()
  const fetchTask = useTodoStore(state => state.getTodo)
  const editFn = useTodoStore(state => state.editTodo)
  const [Loading, setloading] = useState<boolean>(true)

  const todo = useTodoStore(state => state.concreteTodo)
  const { id, attributes } = todo

  const handleEditDescription = (desc: string) => {
    editFn(id, { status: attributes.status, title: attributes.title, description: desc }).then(res => {
      fetchTask(res.id)
    })
  }

  useEffect(() => {
    setloading(true)
    if (taskId) {
      fetchTask(parseInt(taskId)).then(_ => {
        setloading(false)
      })
    }
  }, [taskId])

  if (Loading) {
    return <Loader />
  }

  return (
    <StyledContainer $theme={theme}>
      <BackButton />
      <Flex
        style={{ width: '100%' }}
        gap={'16px'}
        align='center'
      >
        <Title level={2}>Задача №{taskId}</Title>
        <SetStatus todo={{ id, attributes }} />
        <Flex
          gap={'16px'}
          style={{ marginLeft: 'auto' }}
        >
          <EditTodo todo={{ id, attributes }} />
          <DeleteTodo taskId={id} />
        </Flex>
      </Flex>
      <Title level={2}>{attributes.title}</Title>

      <Paragraph>{attributes.description ? attributes.description : 'Нет описания'}</Paragraph>
    </StyledContainer>
  )
}
