import { useEffect } from 'react'
import { useCanvas } from './CanvasContext'

export function Canvas(Props) {
  
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    changeBrushColor
  } = useCanvas()

  
  // Clear canvas on reset to make it white
  useEffect(() => {
    prepareCanvas()
    clearCanvas()
    changeBrushColor(Props.color)
  }, [])

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
}