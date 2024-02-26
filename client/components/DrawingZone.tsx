import { useEffect } from 'react'
import { useCanvas } from './CanvasContext'
import { useGameTracker } from './GameTrackerContext'

// seems to be importing all the functions including canvasRef
function DrawingZone() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    handleMouseLeave,
  } = useCanvas()

  // Set the intial States
  useEffect(() => {
    prepareCanvas()
  }, [])
  const{gamePhase}= useGameTracker()

  return (
    <>
      <img
        className={gamePhase === 3 ? 'done-frame' : 'done-frame hidden'}
        alt="frame"
        src="/gameDoneFrame.png"
      />
      <div className="canvas-container">
        <img
          className={gamePhase === 2 ? 'question-top' : 'question-top hidden'}
          src="/question.png"
          alt="concealed canvas"
          draggable="false"
        />
        <img
          className={
            gamePhase === 1 ? 'question-bottom' : 'question-bottom hidden'
          }
          src="/question.png"
          alt="concealed canvas"
          draggable="false"
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onTouchEnd={finishDrawing}
          onMouseMove={draw}
          onMouseLeave={handleMouseLeave}
          ref={canvasRef}
        />
      </div>
    </>
  )
}

export default DrawingZone
