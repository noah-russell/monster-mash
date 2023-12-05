// CanvasProvider.js
import React, { useContext, useRef, useState } from 'react'

const CanvasContext = React.createContext({})

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushColor, setBrushColor] = useState('black')
  const [brushSize, setBrushSize] = useState(5)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    const canvasWidth = 500
    const canvasHeight = 500

    canvas.width = canvasWidth * 2
    canvas.height = canvasHeight * 2
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`

    const context = canvas.getContext('2d')
    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = brushColor
    context.lineWidth = brushSize
    contextRef.current = context
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
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
    // setBrushColor(color)
    contextRef.current.strokeStyle = color
  }
  const changeBrushSize = (size) => {
    //   // setBrushSize(brushSize)
    contextRef.current.lineWidth = size
  }

  const saveCanvasAsImage = () => {
    const dataURL = canvasRef.current.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'canvas_image.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
        brushSize,
        changeBrushColor,
        changeBrushSize,
        setBrushSize,
        handleMouseLeave,
        saveCanvasAsImage,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext)
