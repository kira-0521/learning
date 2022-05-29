import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.css'
import { StateProvider } from './context/StateProvider'
import { Layout } from './components/inspection/Layout'
import { ClassicalFetchA } from './components/inspection/ClassicalFetchA'
import { ClassicalFetchB } from './components/inspection/ClassicalFetchB'
import { ReactQueryA } from './components/inspection/ReactQueryA'
import { ReactQueryB } from './components/inspection/ReactQueryB'
import { MainContext } from './components/inspection/MainContext'
import { MainRTKit } from './components/inspection/MainRTKit'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-b" element={<ReactQueryB />} />
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
              <Route path="/main-context" element={<MainContext />} />
              <Route path="/main-rtkit" element={<MainRTKit />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
