function demo(data: { x: number, y: number }) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

const result = demo({ x: 2, y: 5 })
console.log(result)