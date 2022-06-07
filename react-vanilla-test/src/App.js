import { Layout } from './components/Layout'
import RenderInput from './RenderInput'
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <Layout>
      <Counter />
      <RenderInput outputConsole={console.log} />
    </Layout>
  )
}

export default App
