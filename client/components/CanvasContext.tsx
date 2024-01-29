// CanvasProvider.js
import React, { useContext, useRef, useState } from 'react'

// initates the context hook
const CanvasContext = React.createContext({})

export function CanvasProvider({ children }) {
  const [isDrawing, setIsDrawing] = useState(false)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  function prepareCanvas():void{
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const canvasWidth = 500
    canvas.width = canvasWidth
    canvas.height = canvasWidth
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasWidth}px`

    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    contextRef.current = context
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }
  
  // open and close path is needed else that path will remain live and anyone 
  // can change the colour or width of it in the browser. 
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
  const changeBrushColour = (colour) => {
    contextRef.current.strokeStyle = colour
  }
  const changeBrushSize = (size) => {
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
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
        changeBrushColour,
        changeBrushSize,
        handleMouseLeave,
        saveCanvasAsImage,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

// this code means you can use context in order to import
export const useCanvas = () => useContext(CanvasContext)
