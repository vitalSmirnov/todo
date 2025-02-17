export type Error = {
  data: Record<string, unknown>
  error: {
    message: string
    name: string
    details: Record<string, unknown>
    status: number
  }
}
