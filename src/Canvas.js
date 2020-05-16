import React, { useState } from 'react'
import * as _ from 'ramda'
import { integerToArray } from './conversions'

const _canvas = [
  385,
  960,
  3122,
  14366,
  24578,
  16386,
  16386,
  16386,
  16386,
  16386,
  16386,
  16390,
  30748,
  19504,
  960,
  33152,
]

const canvas = _canvas.map(row => integerToArray(row))

export default () => {
  const [canvasState, setCanvasState] = useState(canvas)

  return (
    <div className="App">
      {
        canvasState.map((row, rowIndex) =>
          <div
            key={rowIndex}
            style={{
              lineHeight: '9.5px',
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
                  width: 10,
                  height: 10,
                  backgroundColor: cell ? '#000' : '#fff',
                }}
              />,
            )}
          </div>)
      }
    </div>
  )
}
