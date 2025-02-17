import { Task } from '../../../../entity/types'
import { BASE_URL } from '../baseUrl'

type GetTaskPayload = {}
type GetTaskResponse = {
  data: Task[]
}

export const getTasksRequest = async ({}: GetTaskPayload): Promise<GetTaskResponse> => {
  const response = await fetch(`${BASE_URL}/task`)
  return response.json()
}
