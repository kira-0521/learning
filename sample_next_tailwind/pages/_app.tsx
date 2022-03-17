import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from './layout'
import { LoginUserProvider } from '../providers/LoginUserProvider'
import { LoadingProvider } from '../providers/LoadingProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginUserProvider>
      <LoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProvider>
    </LoginUserProvider>
  )
}

export default MyApp
