import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'
import { useQuery } from '@tanstack/react-query'
import SubmitMonsterForm from './SubmitMonsterForm'

function PlayHotSeat(props) {
  const [gameState, setGameState] = useState(0)

  const artistNamesAndGameState = {
    ...props,
    gameState,
  }

  const { changeBrushColor, changeBrushSize } = useCanvas()

  function handleDoneClick() {
    if (gameState < 2) {
      setGameState(gameState + 1)
    } else {
      setGameState(0)
    }
  }

  function handleBlackPencilClick() {
    changeBrushColor('black')
  }

  function handleRubberClick() {
    changeBrushColor('white')
  }
  function handleSmallBrushChange() {
    // console.log('handleSmallBrushChange')
    changeBrushSize(5)
  }
  function handleMediumBrushChange() {
    // console.log('handleMediumBrushChange')
    changeBrushSize(15)
  }
  function handleLargeBrushChange() {
    // console.log('handleLargeBrushChange')
    changeBrushSize(30)
  }

  // console.log('gameState', gameState)
  return (
    <>
      <div className="play-hot-seat">
        <div className="colin">
          <Colin {...artistNamesAndGameState} />
        </div>
        <div className="drawing-zone vflex">
          <div className="canvas">
            <DrawingZone gameState={gameState} />
          </div>
        </div>
        <div className="controls vflex">
          <img
            className="controls-img"
            src="client/public/toolbar.png"
            draggable="false"
          />

          <div className="colour-controls">
            <img
              onClick={handleBlackPencilClick}
              src="client/public/pencil.png"
              alt="pencil icon"
              draggable="false"
            />
            <img
              onClick={handleRubberClick}
              src="client/public/rubber.png"
              alt="rubber icon"
              draggable="false"
            />
            <div className="hflex brush-sizes">
              <button onClick={handleSmallBrushChange}>small</button>
              <button onClick={handleMediumBrushChange}>medium</button>
              <button onClick={handleLargeBrushChange}>large</button>
            </div>
          </div>

          <button onClick={handleDoneClick}>
            <p>done</p>
          </button>
          <div>
            <SubmitMonsterForm {...artistNamesAndGameState} />
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
