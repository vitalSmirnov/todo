import { ErrorElement } from '../../entity/ui/ErrorElement'

const ErrorPage = () => {
  document.title = 'Упс! Что-то пошло не так'
  return <ErrorElement />
}

export default ErrorPage
