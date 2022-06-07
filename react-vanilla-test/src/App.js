import { Layout } from './components/Layout'
import RenderInput from './RenderInput'
import { Counter } from './features/counter/Counter'
import FrameworkList from './FrameworkList'

function App() {
  const data = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ]
  return (
    <Layout>
      <Counter />
      <RenderInput outputConsole={console.log} />
      <FrameworkList frameworks={data} />
    </Layout>
  )
}

export default App
