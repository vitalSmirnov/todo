import { BASE_URL } from '../baseUrl'

import { Task } from '../../../../entity/types'
import { EditTaskModel } from '../dataSource/EditTaskModel'

type CreateTaskPayload = {
  body: EditTaskModel
}
type CreateTaskResponse = {
  data: Task
}

export const createTaskRequest = async ({ body }: CreateTaskPayload): Promise<CreateTaskResponse> => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        body,
      },
    }),
  })
  return response.json()
}
