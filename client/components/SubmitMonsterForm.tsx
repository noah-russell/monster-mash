import { Form } from 'react-router-dom'
import { useCanvas } from './CanvasContext'
import { useEffect, useState } from 'react'

function SubmitMonsterForm() {
  const {
    canvasRef,
    contextRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    clearCanvas,
    draw,
    brushColor,
    changeBrushColor,
    handleMouseLeave,
    saveCanvasAsImage,
    saveCanvasToGallery,
    formData,
  } = useCanvas()

  useEffect(() => {
    saveCanvasToGallery()
  }, [saveCanvasToGallery])

  console.log('formComponent', formData)
  return <></>
}

export default SubmitMonsterForm
