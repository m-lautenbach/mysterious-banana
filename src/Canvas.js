import React, { useState } from 'react'
import * as _ from 'ramda'

export default ({ canvas, size }) => {
  const [canvasState, setCanvasState] = useState(canvas)

  return (
    <div>
      {
        canvasState.map((row, rowIndex) =>
          <div
            key={rowIndex}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(16, 1fr)',
              gridGap: 0,
              width: size
            }}
          >
            {row.map((cell, cellIndex) =>
              <div
                key={cellIndex}
                onClick={() => {
                  const updatedCanvas = _.assocPath([rowIndex, cellIndex], cell ? 0 : 1, canvasState)
                  setCanvasState(updatedCanvas)
                }}
                style={{
                  height: size / 16,
                  backgroundColor: cell ? '#000' : '#fff',
                }}
              />,
            )}
          </div>)
      }
    </div>
  )
}
