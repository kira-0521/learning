import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className='flex flex-rows p-2 bg-red-500 text-white font-bold'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About </a>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
