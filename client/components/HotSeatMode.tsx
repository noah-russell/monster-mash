import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState(false)
  console.log(isWelcome)

  return (
    <>
      <div className={!isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <Welcome props={setIsWelcome} />
      </div>
      <div className={isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <p>hot seat mode!</p>
        <div>
          <p>another ptag</p>
        </div>
        <CanvasProvider >
        <PlayHotSeat />
        </ CanvasProvider >
      </div>
    </>
  )
}

export default HotSeatMode
