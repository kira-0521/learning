import { VFC } from 'react'
import Link from 'next/link'

export const Header: VFC = () => {
  return (
    <header className='py-4 px-8 w-full bg-orange-400'>
      <nav className='mx-auto flex items-start'>
        <div>
          <h1 className='font-bold text-indigo-500'>ユーザー管理アプリ</h1>
        </div>
        <ul className='ml-4 flex text-white'>
          <li>
            <Link href='/users'>ユーザー一覧</Link>
          </li>
          <li className='ml-2'>
            <Link href='/user_management'>設定</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
