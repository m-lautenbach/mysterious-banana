import React, { useCallback, useState } from 'react'
import * as _ from 'ramda'
import { arrayToInteger } from './conversions'

export default ({ id, canvas, size }) => {
  const [canvasState, setCanvasState] = useState(canvas)

  const handleClick = useCallback(async (rowIndex, cellIndex, cellValue) => {
    const updatedCanvas = _.assocPath([rowIndex, cellIndex], cellValue ? 0 : 1, canvasState)
    setCanvasState(updatedCanvas)

    await fetch(`https://collaborativecanvas.herokuapp.com/v1/canvases/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: updatedCanvas.map(row => arrayToInteger(row))
      })
    });
  }, [canvasState])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(16, 1fr)',
          gridGap: 0,
          width: size,
        }}
      >
        {
          canvasState.map((row, rowIndex) =>
            <div
              key={rowIndex}
            >
              {row.map((cellValue, cellIndex) =>
                <div
                  key={cellIndex}
                  onClick={() => handleClick(rowIndex, cellIndex, cellValue)}
                  style={{
                    height: size / 16,
                    backgroundColor: cellValue ? '#000' : '#fff',
                  }}
                />,
              )}
            </div>)
        }
      </div>
    </div>
  )
}
