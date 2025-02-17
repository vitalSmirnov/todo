import { ChangingData } from './updatedBy'

export type Task = {
  id: number
  attributes: {
    status: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    createedBy: ChangingData
    updatedBy: ChangingData
  }
}
