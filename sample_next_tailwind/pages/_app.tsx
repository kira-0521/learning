import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from './layout'
import { LoginUserProvider } from '../providers/LoginUserProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginUserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginUserProvider>
  )
}

export default MyApp
