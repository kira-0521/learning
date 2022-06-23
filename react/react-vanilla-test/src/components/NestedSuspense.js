import { Suspense } from 'react'
import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchTasks } from './FetchTasks'
import { FetchUsers } from './FetchUsers'
import { ErrorBoundary } from 'react-error-boundary'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export const NestedSuspense = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">Nested Suspense</p>
      {/* parentがエラーするとまとめてエラー処理を行う */}
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        {/* 親のfallbackが優先して表示される */}
        <Suspense
          fallback={
            <>
              <p className="my-5 text-green-500">Showing outer skelton...</p>
              <Spinner />
            </>
          }
        >
          <FetchUsers />
          <Suspense
            fallback={
              <>
                <p className="my-5 text-pink-500">Showing inner skelton...</p>
                <Spinner />
              </>
            }
          >
            <FetchTasks />
          </Suspense>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
