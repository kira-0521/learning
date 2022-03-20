import { VFC, memo } from 'react'
import Link from 'next/link'

export const Header: VFC = memo(function header() {
  return (
    <header className='w-full'>
      <div className='navbar bg-base-300'>
        <div className='flex-1 px-2 lg:flex-none'>
          <a className='text-lg font-bold'>Next_DaysyUI</a>
        </div>
        <div className='flex justify-end flex-1 px-2 text-neutral'>
          <div className='flex items-stretch'>
            <ul className='hidden md:flex'>
              <li className='link link-hover'>
                <Link href='/users'>ユーザー一覧</Link>
              </li>
              <li className='link link-hover ml-2'>
                <Link href='/users_management'>ユーザー管理画面</Link>
              </li>
            </ul>
            <div className='dropdown dropdown-end md:hidden sm:block'>
              <label className='btn btn-ghost rounded-btn'>Menu</label>
              <ul className='menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4'>
                <li>
                  <Link href='/users'>ユーザー一覧</Link>
                </li>
                <li>
                  <Link href='/users_management'>ユーザー管理画面</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})
