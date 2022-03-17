import { ReactNode } from 'react'
import { Header } from '../components/organisms/layouts/Header'
import { Footer } from '../components/organisms/layouts/Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
