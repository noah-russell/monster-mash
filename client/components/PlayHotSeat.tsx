import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'
import SubmitMonsterForm from './SubmitMonsterForm'
import { BrushDivBackground } from '../../models/monster-models'

function PlayHotSeat({ ...playHotSeatProps }, { ...welcomeProps }) {
  const { topArtist, bottomArtist } = playHotSeatProps
  const { isWelcome } = welcomeProps
  const [selectedSize, setSelectedSize] = useState<number>(5)
  const [gameState, setGameState] = useState<number>(0)
  const [brushDivBackground, setBrushDivBackground] =
    useState<BrushDivBackground>({ background: 'black' })
  const artistNamesAndGameState = {
    topArtist,
    bottomArtist,
    gameState,
    isWelcome,
  }

  const { changeBrushColour, changeBrushSize } = useCanvas()

  function handleDoneClick() {
    if (gameState < 2) {
      setGameState(gameState + 1)
    } else {
      setGameState(0)
    }
  }

  function handlePencilClick() {
    changeBrushColour('black')
    setBrushDivBackground({ background: 'black' })
  }
  function handleLightPurplePencilClick() {
    changeBrushColour('#ae76b3')
    setBrushDivBackground({ background: '#ae76b3' })
  }
  function handleDarkPurplePencilClick() {
    changeBrushColour('#471352')
    setBrushDivBackground({ background: '#471352' })
  }
  function handleRedPencilClick() {
    changeBrushColour('#9b3008')
    setBrushDivBackground({ background: '#9b3008' })
  }
  function handleColinGreyPencilClick() {
    changeBrushColour('#9a9a9a')
    setBrushDivBackground({ background: '#9a9a9a' })
  }
  function handleRubberClick() {
    changeBrushColour('white')
    setBrushDivBackground({ background: 'white' })
  }
  function handleSmallBrushChange() {
    changeBrushSize(5)
    setSelectedSize(5)
  }
  function handleMediumBrushChange() {
    changeBrushSize(15)
    setSelectedSize(15)
  }
  function handleLargeBrushChange() {
    changeBrushSize(30)
    setSelectedSize(30)
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
          <div
            className={
              gameState === 2 ? 'hidden colour-controls' : 'colour-controls'
            }
          >
            <div className="colours">
              <div
                className={`pencil-crop ${
                  brushDivBackground.background == 'black'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handlePencilClick}
              >
                <img
                  src="/pencil_black.png"
                  alt="black pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className={`pencil-crop ${
                  brushDivBackground.background == '#471352'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handleDarkPurplePencilClick}
              >
                <img
                  src="/pencil_dark_purple.png"
                  alt="dark purple pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className={`pencil-crop ${
                  brushDivBackground.background == '#ae76b3'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handleLightPurplePencilClick}
              >
                <img
                  src="/pencil_light_purple.png"
                  alt="light purple pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className={`pencil-crop ${
                  brushDivBackground.background == '#9a9a9a'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handleColinGreyPencilClick}
              >
                <img
                  src="/pencil_grey.png"
                  alt="pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className={`pencil-crop ${
                  brushDivBackground.background == '#9b3008'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handleRedPencilClick}
              >
                <img
                  src="/pencil_red.png"
                  alt="red pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className={`pencil-crop ${
                  brushDivBackground.background == 'white'
                    ? 'selected-colour'
                    : ''
                }`}
                onClick={handleRubberClick}
              >
                <img src="/rubber.png" alt="rubber icon" draggable="false" />
              </div>
              <div className="hflex brush-sizes">
                <div className="hflex brush-size-container">
                  <button
                    className={`brush-box ${
                      selectedSize == 5 ? 'selected-size' : ''
                    }`}
                    onClick={handleSmallBrushChange}
                  >
                    <div
                      className="small-brush brush"
                      style={brushDivBackground}
                    ></div>
                  </button>
                  <button
                    className={`brush-box ${
                      selectedSize == 15 ? 'selected-size' : ''
                    }`}
                    onClick={handleMediumBrushChange}
                  >
                    <div
                      className="medium-brush brush"
                      style={brushDivBackground}
                    ></div>
                  </button>
                  <button
                    className={`brush-box ${
                      selectedSize == 30 ? 'selected-size' : ''
                    }`}
                    onClick={handleLargeBrushChange}
                  >
                    <div
                      className="large-brush brush"
                      style={brushDivBackground}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="button-and-form-controls">
            <button
              className={gameState === 2 ? 'hidden' : ''}
              onClick={handleDoneClick}
            >
              <p>{`${gameState === 0 ? topArtist : bottomArtist} done!`}</p>
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
