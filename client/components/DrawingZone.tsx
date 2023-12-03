import { useEffect } from 'react'
import { useCanvas } from './CanvasContext'

function DrawingZone() {
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
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}

export default DrawingZone
