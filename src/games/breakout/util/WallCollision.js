export function WallCollision(obj, canvas) {
  if (obj.y - obj.rad <= 0 || obj.y + obj.rad >= canvas.height) {
    obj.dy *= -1
  }

  if (obj.x - obj.rad <= 0 || obj.x + obj.rad >= canvas.width) {
    obj.dx *= -1
  }
}
