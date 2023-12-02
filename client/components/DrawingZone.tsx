import React from 'react'
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton'
import { CanvasProvider } from './CanvasContext'
import ColorChangeButton from './ColorChangeButton'

function DrawingZone() {
  return (
    <>
      <CanvasProvider>
        <Canvas />
        <ClearCanvasButton />
        <ColorChangeButton />
      </CanvasProvider>
    </>
  )
}

export default DrawingZone
