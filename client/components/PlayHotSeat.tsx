import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'

function PlayHotSeat() {
  const { changeBrushColor } = useCanvas()

  function handleBlackPencilClick() {
    changeBrushColor('black')
  }

  function handleRubberClick() {
    changeBrushColor('white')
  }

  return (
    <>
      <div className="play-hot-seat">
        <div className="colin">
          <Colin />
        </div>
        <div className="drawing-zone vflex">
          <div className="canvas">
            <DrawingZone />
          </div>
        </div>
        <div className="controls vflex">
          <img className="controls-img" src="client/public/toolbar.png" />

          <div className="colour-controls">
            <img
              onClick={handleBlackPencilClick}
              src="client/public/pencil.png"
              alt="pencil icon"
            />
            <img
              onClick={handleRubberClick}
              src="client/public/rubber.png"
              alt="rubber icon"
            />
          </div>

          <button>
            <p>done</p>
          </button>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
