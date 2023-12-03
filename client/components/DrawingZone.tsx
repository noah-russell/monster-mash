import { useEffect } from 'react'
import { useCanvas } from './CanvasContext'

function DrawingZone({ gameState }) {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    changeBrushColor,
  } = useCanvas()

  // Set the intial States
  useEffect(() => {
    prepareCanvas()
    clearCanvas()
    changeBrushColor()
  }, [])

  return (
    <>
      <div className="canvas-container">
        <img
          className={gameState === 1 ? 'question-top' : 'question-top hidden'}
          src="client/public/question.png"
          alt="concealed canvas"
        />
        <img
          className={
            gameState === 0 ? 'question-bottom' : 'question-bottom hidden'
          }
          src="client/public/question.png"
          alt="concealed canvas"
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </>
  )
}

export default DrawingZone
