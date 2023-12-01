import React, { useEffect } from 'react'
import { useCanvas } from './CanvasContext'

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
  } = useCanvas()
  // Clear canvas on reset to make it white
  useEffect(() => {
    prepareCanvas()
    clearCanvas()
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
