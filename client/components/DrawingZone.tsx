import React from 'react'
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton'
import { CanvasProvider } from './CanvasContext'

function DrawingZone() {
  return (

      <CanvasProvider>
        <Canvas />
        <ClearCanvasButton />
      </CanvasProvider>
    </>
  )
}

export default DrawingZone
