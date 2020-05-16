import { Link, useParams } from 'react-router-dom'
import Canvas from './Canvas'
import React from 'react'

export default () => {
  let { id } = useParams()
  return <div>
    <Link to="/">Back to list</Link>
    <Canvas />
  </div>
}
