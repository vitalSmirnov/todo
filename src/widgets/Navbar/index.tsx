import { Flex } from 'antd'
import { CreateTask } from '../../features/CreateTask'

export const Navbar = () => {
  return (
    <Flex
      gap={'16px'}
      justify='end'
      style={{ width: '100%' }}
    >
      <CreateTask />
    </Flex>
  )
}
