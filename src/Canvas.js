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
              lineHeight: 0,
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
                  display: 'inline-block',
                  width: size / 16,
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
