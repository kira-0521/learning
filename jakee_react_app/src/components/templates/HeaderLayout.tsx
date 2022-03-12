import { memo, VFC, ReactNode } from 'react'

import { Header } from '../pages/organisms/layouts/Header'

type Props = {
  children: ReactNode
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
})
