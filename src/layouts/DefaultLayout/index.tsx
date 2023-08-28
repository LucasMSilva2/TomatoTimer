import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      {/* Componente(conteúdo) que vai transicionar de acordo com a página */}
      <Outlet />
    </LayoutContainer>
  )
}
