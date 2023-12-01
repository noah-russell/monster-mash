import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'

function PlayHotSeat() {
  const [colour, setColour] = useState('black')

  function handleBlackPencilClick(event) {
    setColour('black')
  }

  function handleRubberClick() {
    setColour('white')
  }

  console.log('colourState', colour)
  return (
    <>
      <div className="play-hot-seat">
        <Colin />
        <div className="drawing-zone">
          <DrawingZone />
        </div>
        <div className="controls">
          <div className="drawing-tools">
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
          <button>Done</button>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
