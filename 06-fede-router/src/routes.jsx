import Home from "./pages/Home"
import About from "./pages/About"
import SearchPage from "./pages/SearchPage"

export const routes = [
    {
      path: '/',
      Component: Home
    },
    {
      path: '/about',
      Component: About
    },
    {
      path: '/search/:query',
      Component: SearchPage
    }
  ]