import {  lazy, Suspense } from 'react'
import './App.css'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'

const LazyAbout = lazy(() => import('./pages/About.jsx'))
const LazyHome = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/',
    Component: LazyHome
  },
  {
    path: '/:lang/about',
    Component: LazyAbout
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback= {<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHome} />
          <Route path='/about' Component={LazyAbout} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
