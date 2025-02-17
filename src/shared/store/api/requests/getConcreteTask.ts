import { Task } from '../../../../entity/types'
import { BASE_URL } from '../baseUrl'

type GetConcreteTaskPayload = {
  taskId: number
}
type GetConcreteTaskResponse = {
  data: Task
}

export const getConcreteTask = async ({ taskId }: GetConcreteTaskPayload): Promise<GetConcreteTaskResponse> => {
  const response = await fetch(`${BASE_URL}/task/${taskId}`)
  return response.json()
}
