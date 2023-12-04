import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'
import { useQuery } from '@tanstack/react-query'
import SubmitMonsterForm from './SubmitMonsterForm'

function PlayHotSeat() {
  //useQuery experiment

  // function increaseGameState() {
  //  return (gameState + 1)
  // }

  // const {
  //   data: gameState
  //   isLoading,
  //   isError,
  // } = useQuery({queryKey: ['gameState'], queryFn: increaseGameState})

  //useState experiment
  const [gameState, setGameState] = useState(0)

  const { changeBrushColor } = useCanvas()

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
  console.log('gameState', gameState)
  return (
    <>
      <div className="play-hot-seat">
        <div className="colin">
          <Colin gameState={gameState} />
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
          </div>

          <button onClick={handleDoneClick}>
            <p>done</p>
          </button>
          <div>
            <SubmitMonsterForm gameState={gameState} />
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
