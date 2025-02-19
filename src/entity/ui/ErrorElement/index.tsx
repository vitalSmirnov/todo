import { useTheme } from 'styled-components'
import { EmptyIcon } from '../../../shared/ui/atoms/EmptyIcon'
import { StyledContainer } from './styled'
import { Link } from 'react-router-dom'
import { Routes } from '../../../shared/lib/routes'

export const ErrorElement = () => {
  const theme = useTheme()
  return (
    <StyledContainer $theme={theme}>
      <EmptyIcon icon={'/404.svg'}>
        <p>
          Что-то пошло не так, попробуйте перейти на <Link to={Routes.DEFAULT}>главную страницу</Link>
        </p>
      </EmptyIcon>
    </StyledContainer>
  )
}
