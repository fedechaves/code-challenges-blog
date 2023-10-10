import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import { routes } from './routes'

function App() {

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
