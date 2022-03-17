import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className='flex py-2 px-8 bg-red-500 text-white font-bold'>
        <Link href='/'>
          <a className='pr-4'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='pr-4'>About </a>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
