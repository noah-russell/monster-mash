import { useEffect } from 'react'
import { useCanvas } from './CanvasContext'


// seems to be importing all the functions including canvasRef
function DrawingZone({ gameState }: { gameState: number }) {
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

  return (
    <>
      <img
        className={gameState === 2 ? 'done-frame' : 'done-frame hidden'}
        alt="frame"
        src='/gameDoneFrame.png'
      />
      <div className="canvas-container">
        <img
          className={gameState === 1 ? 'question-top' : 'question-top hidden'}
          src='/question.png'
          alt="concealed canvas"
          draggable="false"
        />
        <img
          className={
            gameState === 0 ? 'question-bottom' : 'question-bottom hidden'
          }
          src='/question.png'
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
