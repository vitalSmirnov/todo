import { BASE_URL } from '../baseUrl'

import { Task } from '../../../../entity/types'

type CreateTaskPayload = {
  body: Task
}
type CreateTaskResponse = {
  data: Task
}

export const createTaskRequest = async ({ body }: CreateTaskPayload): Promise<CreateTaskResponse> => {
  const response = await fetch(`${BASE_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response.json()
}
