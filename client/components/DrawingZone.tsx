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
    changeBrushSize,
    handleMouseLeave,
  } = useCanvas()

  // Set the intial States
  useEffect(() => {
    prepareCanvas()
    clearCanvas()
    changeBrushColor()
    changeBrushSize()
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
          onMouseMove={draw}
          onMouseLeave={handleMouseLeave}
          ref={canvasRef}
        />
      </div>
    </>
  )
}

export default DrawingZone
