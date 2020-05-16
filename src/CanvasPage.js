import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { integerToArray } from './conversions'
import Canvas from './Canvas'

export default () => {
  let { id } = useParams()
  const [canvas, setCanvas] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(`https://collaborativecanvas.herokuapp.com/v1/canvases/${id}`)
      const data = (await resp.json())
      setCanvas(data)
    }

    fetchData()
  }, [id])

  console.log(canvas)

  return <div>
    <Link to="/">Back to list</Link>
    <div style={{ height: '.5rem' }} />
    {canvas ?
      <Canvas canvas={canvas.content.map(row => integerToArray(row))} size={300} />
      : <div>Loading...</div>
    }
  </div>
}
