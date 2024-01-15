import Colin from './Colin'
import DrawingZone from './DrawingZone'
import { useState } from 'react'
import { useCanvas } from './CanvasContext'
import SubmitMonsterForm from './SubmitMonsterForm'
import { BrushDivBackground } from '../../models/monster-models'

import pencilblack from '../public/pencil_black.png'
import pencildarkpurple from '../public/pencil_dark_purple.png'
import pencillightpurple from '../public/pencil_light_purple.png'
import pencilgrey from '../public/pencil_grey.png'
import pencilred from '../public/pencil_red.png'
import rubber from '../public/rubber.png'

function PlayHotSeat({ ...playHotSeatProps }, { ...welcomeProps }) {
  const { topArtist, bottomArtist } = playHotSeatProps
  const { isWelcome } = welcomeProps
  const [gameState, setGameState] = useState<number>(0)
  const [brushDivBackground, setBrushDivBackground] =
    useState<BrushDivBackground>({ background: 'black' })
  const artistNamesAndGameState = {
    topArtist,
    bottomArtist,
    gameState,
    isWelcome,
  }

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
    setBrushDivBackground({ background: 'black' })
  }
  function handleLightPurplePencilClick() {
    changeBrushColor('#ae76b3')
    setBrushDivBackground({ background: '#ae76b3' })
  }
  function handleDarkPurplePencilClick() {
    changeBrushColor('#471352')
    setBrushDivBackground({ background: '#471352' })
  }
  function handleRedPencilClick() {
    changeBrushColor('#9b3008')
    setBrushDivBackground({ background: '#9b3008' })
  }
  function handleColinGreyPencilClick() {
    changeBrushColor('#9a9a9a')
    setBrushDivBackground({ background: '#9a9a9a' })
  }
  function handleRubberClick() {
    changeBrushColor('white')
    setBrushDivBackground({ background: 'white' })
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
          <div
            className={
              gameState === 2 ? 'hidden colour-controls' : 'colour-controls'
            }
          >
            <div className="colours">
              <div className="pencil-crop" onClick={handlePencilClick}>
                <img
                  src={pencilblack}
                  alt="black pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className="pencil-crop"
                onClick={handleDarkPurplePencilClick}
              >
                <img
                  src={pencildarkpurple}
                  alt="dark purple pencil icon"
                  draggable="false"
                />
              </div>

              <div
                className="pencil-crop"
                onClick={handleLightPurplePencilClick}
              >
                <img
                  src={pencillightpurple}
                  alt="light purple pencil icon"
                  draggable="false"
                />
              </div>

              <div className="pencil-crop" onClick={handleColinGreyPencilClick}>
                <img src={pencilgrey} alt="pencil icon" draggable="false" />
              </div>

              <div className="pencil-crop" onClick={handleRedPencilClick}>
                <img src={pencilred} alt="red pencil icon" draggable="false" />
              </div>

              <div className="pencil-crop" onClick={handleRubberClick}>
                <img src={rubber} alt="rubber icon" draggable="false" />
              </div>
              <div className="hflex brush-sizes">
                <div className="hflex brush-size-container">
                  <button
                    className="brush-box"
                    onClick={handleSmallBrushChange}
                  >
                    <div
                      className="small-brush brush"
                      style={brushDivBackground}
                    ></div>
                  </button>
                  <button
                    className="brush-box"
                    onClick={handleMediumBrushChange}
                  >
                    <div
                      className="medium-brush brush"
                      style={brushDivBackground}
                    ></div>
                  </button>
                  <button
                    className="brush-box"
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
