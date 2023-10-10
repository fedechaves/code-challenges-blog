import './App.css'
import { Router } from './Router'
import { Route } from './Route'
import Page404 from './pages/404'
import { routes } from './routes'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Router>
    </main>
  )
}

export default App
