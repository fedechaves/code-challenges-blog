import { createRoot } from 'react-dom/client'
import React from 'react'
// import App from './src/App'
import App2 from './src/App2'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
)
