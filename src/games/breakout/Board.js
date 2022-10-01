import { useEffect, useRef } from 'react'
import { BallMovement } from '../BallMovement'
import data from '../../data'
import { WallCollision } from './util/WallCollision'
import Paddle from './Paddle'
import Brick from './Brick'
import BrickCollision from './util/BrickCollision'

let bricks = []

let { ballObj, paddleProps, brickObj } = data

export const Board = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      // ---------------------------------------------------------

      // Assign Briks
      let newBrickSet = Brick(2, bricks, canvas, brickObj)
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // ---------------------------------------------------------

      // Dispaly Bricks
      bricks.map((brick) => brick.draw(ctx))

      // Handle Ball Movement
      BallMovement(ctx, ballObj)

      // Wall and Ball Collision
      WallCollision(ballObj, canvas)

      // Brick Collision
      let brickCollision
      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i])

        if (brickCollision.hit && !bricks[i].broke) {
          if (brickCollision.axis === 'X') {
            ballObj.dx *= -1
            bricks[i].broke = true
          } else if (brickCollision.axis === 'Y') {
            ballObj.dy *= -1
            bricks[i].broke = true
          }
        }
      }

      Paddle(ctx, canvas, paddleProps)

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      height='500'
      onMouseMove={(e) =>
        (paddleProps.x = e.clientX - paddleProps.width / 2 - 10)
      }
      width={window.innerWidth - 20}
      id='canvas'
    />
  )
}
