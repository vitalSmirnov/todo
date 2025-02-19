import { Task } from '../../../../entity/types'
import { BASE_URL } from '../baseUrl'
import { Filters } from '../dataSource/Filters'
import { Pagination } from '../dataSource/Pagination'

type GetTaskPayload = Filters
type GetTaskResponse = {
  data: Task[]
  meta: {
    pagination: Pagination
  }
}

export const getTasksRequest = async (filters: GetTaskPayload): Promise<GetTaskResponse> => {
  const query = new URLSearchParams(
    Object.entries(filters).reduce(
      (acc, [key, value]) => {
        acc[key] = String(value)

        return acc
      },
      {} as Record<string, string>
    )
  ).toString()
  const response = await fetch(`${BASE_URL}/tasks?` + query)
  return response.json()
}
