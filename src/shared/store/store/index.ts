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
import { Pagination } from '../api/dataSource/Pagination'
import { Filters } from '../api/dataSource/Filters'
import { StatusEnum } from '../../../entity/types/statusEnum'

type State = {
  todos: Task[]
  staredTodos: Task[]
  pagination: Pagination
  concreteTodo: Task
}

type Actions = {
  toggleTodo: (taskId: number, body: EditTaskModel) => void
  createTodo: (body: EditTaskModel) => Promise<void>
  deleteTodo: (taskId: number) => void
  editTodo: (taskId: number, body: EditTaskModel) => Promise<Task>
  getTodos: (filters: Filters) => void
  getTodo: (taskId: number) => Promise<Task>
  setStar: (todo: Task) => void
  unsetStar: (todo: Task) => void
}

export const useTodoStore = create<State & Actions>()(
  persist(
    immer(set => ({
      todos: [],
      staredTodos: [],
      concreteTodo: {} as Task,
      pagination: {
        page: 0,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
      toggleTodo: async (taskId: number, body: EditTaskModel) => {
        const res = await editTaskRequest({ taskId, body })
        set(state => {
          const todo = state.todos.find(item => item.id === taskId)
          if (todo) todo.attributes = { ...res.data.attributes }
        })
      },
      createTodo: async (body: EditTaskModel) => {
        const res = await createTaskRequest({ body })
        if (res.data) {
          set(state => {
            state.todos.push(res.data)
          })
        }
      },
      deleteTodo: async (taskId: number) => {
        await deleteTaskRequest({ taskId })
        set(state => {
          const deletedIndex = state.todos.findIndex(item => item.id === taskId)
          if (deletedIndex !== -1) state.todos.splice(deletedIndex, 1)
        })
      },
      editTodo: async (taskId: number, body: EditTaskModel) => {
        const res = await editTaskRequest({ taskId, body })
        set(state => {
          const todoIndex = state.todos.findIndex(item => item.id === taskId)
          if (todoIndex !== -1) state.todos[todoIndex] = res.data
        })
        return res.data
      },
      getTodos: async (filters: Filters) => {
        const res = (await getTasksRequest(filters)) || []
        set(state => {
          if (res.meta.pagination.page === state.pagination.page) state.todos = res.data
          else state.todos = [...state.todos, ...res.data]
        })
        set(state => void (state.pagination = res.meta.pagination))
      },
      getTodo: async (taskId: number) => {
        const res = await getConcreteTask({ taskId })
        set(state => void (state.concreteTodo = res.data))

        return res.data
      },
      setStar: (todo: Task) => {
        set(state => void state.staredTodos.push(todo))
      },
      unsetStar: (todo: Task) => {
        set(state => {
          const todoItem = state.staredTodos.indexOf(todo)
          state.staredTodos.splice(todoItem, 1)
        })
      },
    })),
    {
      version: 0,
      partialize: state => ({
        staredTodos: state.staredTodos,
      }),
      migrate(persistedState: unknown, version: number) {
        const state = persistedState as State
        const oldStared = state.staredTodos
        if (oldStared) {
          return { ...state, staredTodos: oldStared }
        }
        return { ...state }
      },
      name: 'todo-store',
    }
  )
)
