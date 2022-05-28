import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>App</Layout>
    </BrowserRouter>
  )
}

export default App
