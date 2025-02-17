import { ChangingData } from './updatedBy'

export type Roles = {
  id: number
  attributes: {
    name: string
    code: string
    description: string
    users: Record<string, unknown>[]
    permissions: Record<string, unknown>[]
    createdAtd: string
    updatedAt: string
    createdBy: ChangingData
    updatedBy: ChangingData
  }
}
