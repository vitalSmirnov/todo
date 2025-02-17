import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Task } from '../../../entity/types/todo'
import { persist } from 'zustand/middleware'
import { getTasksRequest } from '../api/requests/getTasksRequest'
import { getConcreteTask } from '../api/requests/getConcreteTask'
import { editTaskRequest } from '../api/requests/editTaskRequest'
import { deleteTaskRequest } from '../api/requests/deleteTaskRequest'
import { createTaskRequest } from '../api/requests/createTaskRequest'
import { EditTaskModel } from '../api/dataSource/EditTaskModel'

type State = {
  todos: Task[]
  concreteTodo: Task
}

type Actions = {
  toggleTodo: (taskId: number) => void
  createTodo: (body: Task) => void
  deleteTodo: (taskId: number) => void
  editTodo: (taskId: number, body: EditTaskModel) => void
  getTodos: () => void
  getTodo: (taskId: number) => void
}

export const useTodoStore = create<State & Actions>()(
  persist(
    immer(set => ({
      todos: [],
      concreteTodo: {} as Task,
      toggleTodo: async (taskId: number) => {
        const payload: EditTaskModel = {
          data: {
            status: 'completed',
            title: 'title',
            description: '',
          },
        }
        const res = await editTaskRequest({ taskId, body: payload })
        set(state => {
          const todo = state.todos.find(item => item.id === taskId)
          if (todo) todo.attributes = { ...res.data.attributes }
        })
      },
      createTodo: async (body: Task) => {
        const res = await createTaskRequest({ body })
        set(state => {
          state.todos = [...state.todos, res.data]
        })
      },
      deleteTodo: async (taskId: number) => {
        await deleteTaskRequest({ taskId })
        set(state => {
          const todos = state.todos.filter(item => item.id !== taskId)
          state.todos = { ...todos }
        })
      },
      editTodo: async (taskId: number, body: EditTaskModel) => {
        const res = await editTaskRequest({ taskId, body })
        set(state => {
          const todo = state.todos.find(todo => todo.id === taskId)
          if (todo) {
            state.todos[todo.id].attributes = { ...res.data.attributes }
          }
        })
      },
      getTodos: async () => {
        const res = (await getTasksRequest({})) || []
        set(state => (state.todos = { ...res.data }))
      },
      getTodo: async (taskId: number) => {
        const res = await getConcreteTask({ taskId })
        set(state => (state.concreteTodo = res.data))
      },
    })),
    { version: Date.now(), name: 'todo-store' }
  )
)
