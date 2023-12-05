import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'
import SubmitMonsterForm from './SubmitMonsterForm'

function PlayHotSeat(props) {
  const [gameState, setGameState] = useState(0)
  const artistNamesAndGameState = {
    ...props,
    gameState,
  }
  console.log(gameState)

  const { changeBrushColor, changeBrushSize } = useCanvas()

  function handleDoneClick() {
    if (gameState < 2) {
      setGameState(gameState + 1)
    } else {
      setGameState(0)
    }
  }

  function handlePencilClick() {
    changeBrushColor('black')
  }
  function handleLightPurplePencilClick() {
    changeBrushColor('#ae76b3')
  }
  function handleDarkPurplePencilClick() {
    changeBrushColor('#471352')
  }
  function handleRedPencilClick() {
    changeBrushColor('#9b3008')
  }
  function handleColinGreyPencilClick() {
    changeBrushColor('#9a9a9a')
  }
  function handleRubberClick() {
    changeBrushColor('white')
  }
  function handleSmallBrushChange() {
    changeBrushSize(5)
  }
  function handleMediumBrushChange() {
    changeBrushSize(15)
  }
  function handleLargeBrushChange() {
    changeBrushSize(30)
  }

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
          <div className={gameState===2?'hidden colour-controls':"colour-controls"}>
            <img
              className="controls-img"
              src="client/public/toolbar.png"
              draggable="false"
            />
            <div className="colours">
              <img
                onClick={handlePencilClick}
                src="client/public/pencil.png"
                alt="black pencil icon"
                draggable="false"
              />
              <img
                onClick={handleDarkPurplePencilClick}
                src="client/public/darkPurple.png"
                alt="dark purple pencil icon"
                draggable="false"
              />
              <img
                onClick={handleLightPurplePencilClick}
                src="client/public/lightPurple.png"
                alt="light purple pencil icon"
                draggable="false"
              />
              <img
                onClick={handleColinGreyPencilClick}
                src="client/public/colinGrey.png"
                alt="pencil icon"
                draggable="false"
              />
              <img
                onClick={handleRedPencilClick}
                src="client/public/red.png"
                alt="red pencil icon"
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
          </div>

          <div className='button-and-form-controls'>
            <button className={gameState===2?'hidden':""} onClick={handleDoneClick}>
              <p>{`${gameState===0? props.topArtist : props.bottomArtist} done!`}</p>
            </button>
            <div>
              <SubmitMonsterForm {...artistNamesAndGameState} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
