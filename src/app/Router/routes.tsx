import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../../widgets/Layout'
import { lazy } from 'react'
import { Routes } from '../../shared/lib/routes'

const MainPage = lazy(() => import('../../pages/Main'))
const TaskPage = lazy(() => import('../../pages/Task'))
const StaredPage = lazy(() => import('../../pages/Stared'))
const DonePage = lazy(() => import('../../pages/Done'))
const UndonePage = lazy(() => import('../../pages/Undone'))
const ErrorPage = lazy(() => import('../../pages/ErrorPage'))

export const routes = () =>
  createBrowserRouter([
    {
      path: Routes.DEFAULT,
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: Routes.TASK,
          element: <TaskPage />,
        },
        {
          path: Routes.STARED,
          element: <StaredPage />,
        },
        {
          path: Routes.DONE,
          element: <DonePage />,
        },
        {
          path: Routes.UNDONE,
          element: <UndonePage />,
        },
      ],
    },
  ])
