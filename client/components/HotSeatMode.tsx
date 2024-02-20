import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'
import { useGameTracker } from './GameTrackerContext'


function HotSeatMode() {
 const {gameState}= useGameTracker()

  return (
    <>
        <div className={gameState==0? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
          <Welcome />
        </div>
        <div className={gameState==0 ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
          <CanvasProvider>
            <PlayHotSeat />
          </CanvasProvider>
        </div>
    </>
  )
}

export default HotSeatMode
