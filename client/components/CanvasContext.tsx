// CanvasProvider.js
import React, { useContext, useEffect, useRef, useState } from 'react'

const CanvasContext = React.createContext()

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushColor, setBrushColor] = useState('black') // New state for brush color
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    const canvasWidth = 500 // Adjust as needed
    const canvasHeight = 500 // Adjust as needed

    canvas.width = canvasWidth * 2
    canvas.height = canvasHeight * 2
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`

    const context = canvas.getContext('2d')
    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = brushColor // Use the current brush color

    context.lineWidth = 5
    contextRef.current = context
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const handleMouseLeave = () => {
    if (isDrawing) {
      finishDrawing()
    }
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const changeBrushColor = (color) => {
    setBrushColor(color)
    contextRef.current.strokeStyle = color
  }

  const saveCanvasAsImage = () => {
    const canvas = canvasRef.current
    const dataURL = canvas.toDataURL('image/png')

    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'canvas_image.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  let formData

  const saveCanvasToGallery = async () => {
    const canvas = canvasRef.current
    const dataURL = canvas.toDataURL('image/png')

    // Convert data URL to Blob
    const blob = await fetch(dataURL).then((res) => res.blob())

    // Create a FormData object
    formData = new FormData()
    formData.append('canvasImage', blob, 'canvas_image.png')
    console.log('not this one', formData)
  }

  // useEffect(() => {
  //   saveCanvasToGallery()
  // }, [saveCanvasToGallery])

  return (
    <CanvasContext.Provider
      value={{
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
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext)
