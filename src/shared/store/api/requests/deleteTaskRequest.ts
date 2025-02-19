import { BASE_URL } from '../baseUrl'

type DeleteTaskPayload = {
  taskId: number
}
type DeleteTaskResponse = {}

export const deleteTaskRequest = async ({ taskId }: DeleteTaskPayload): Promise<DeleteTaskResponse> => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  })
  return response.json()
}
