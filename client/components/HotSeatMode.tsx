import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState(true)
  console.log('isWelcome', isWelcome)

  return (
    <>
      <div className={!isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <Welcome setIsWelcome={setIsWelcome} />
      </div>
      <div className={isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <CanvasProvider>
          <PlayHotSeat />
        </CanvasProvider>
      </div>
    </>
  )
}

export default HotSeatMode
