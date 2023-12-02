import React from 'react'
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton'
import { CanvasProvider } from './CanvasContext'
import ColorChangeButton from './ColorChangeButton'

function DrawingZone() {

  const color = "purple"
  


  return (
    <>
      <CanvasProvider>
        <Canvas color={color}/>
        <ClearCanvasButton />
        <ColorChangeButton />
      </CanvasProvider>
    </>
  )
}

export default DrawingZone
