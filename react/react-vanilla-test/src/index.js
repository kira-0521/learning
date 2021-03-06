import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AutoBatch } from './components/AutoBatch'
import { SuspenseDemo } from './components/SuspenseDemo'
import { NestedSuspense } from './components/NestedSuspense'
import { Concurrent } from './components/Concurrent'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/autobatch" element={<AutoBatch />} />
          <Route path="/suspense" element={<SuspenseDemo />} />
          <Route path="/nested_suspense" element={<NestedSuspense />} />
          <Route path="/concurrent" element={<Concurrent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // {/* </React.StrictMode> */}
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
