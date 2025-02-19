import { Task } from '../../../../entity/types'
import { BASE_URL } from '../baseUrl'
import { EditTaskModel } from '../dataSource/EditTaskModel'

type EditTaskPayload = {
  taskId: number
  body: EditTaskModel
}
type EditTaskResponse = {
  data: Task
}

export const editTaskRequest = async ({ taskId, body }: EditTaskPayload): Promise<EditTaskResponse> => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { ...body },
    }),
  })
  return response.json()
}
