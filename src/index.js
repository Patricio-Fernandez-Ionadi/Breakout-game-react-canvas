import React from 'react'
import ReactDOM from 'react-dom/client'
import './theme/index.css'

// import { Provider } from 'react-redux'

import { App } from './App'
// import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
)

// const canvas = ReactDOM.createRoot(document.getElementById('canvasHTML'))

// canvas.render()
