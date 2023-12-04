import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'
import SubmitMonsterForm from './SubmitMonsterForm'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState(true)

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
