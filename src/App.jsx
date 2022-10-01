import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Breakout } from './games'

export const App = () => {
  // const canvas = document.getElementById('canvasHTML')
  // const ctx = canvas.getContext('2d')
  // canvas.width = 800
  // canvas.height = 500

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/breakout'>Game</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/breakout' element={<Breakout />} />
      </Routes>
    </BrowserRouter>
  )
}
