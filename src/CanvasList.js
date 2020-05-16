import React, { useEffect, useState } from 'react'
import { List } from 'antd'
import Canvas from './Canvas'
import { integerToArray } from './conversions'
import { Link } from 'react-router-dom'

export default () => {
  const [canvases, setCanvases] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://collaborativecanvas.herokuapp.com/v1/canvases?page=1&per=24')

      setCanvases((await resp.json()).data)
    }

    fetchData()
  }, [])

  console.log(canvases)

  return <List header="Canvas List" style={{margin: '.4rem'}}>
    {
      canvases.map(
        ({ id, title, content }) => <List.Item key={id}>
          <div style={{ display: 'inline-block', padding: '.5rem' }}>
            <span>Title: </span>
            <Link to={`/${id}`}>
              <span style={{ fontStyle: title ? 'normal' : 'italic' }}>{title || 'Untitled'}</span>
            </Link>
          </div>
          <Link to={`/${id}`}>
            <div style={{ marginRight: '1rem' }}>
              <Canvas canvas={content.map(row => integerToArray(row))} size={50} />
            </div>
          </Link>
        </List.Item>,
      )
    }
  </List>
}
