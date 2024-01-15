import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true)
  const [topArtist, setTopArtist] = useState<string>('')
  const [bottomArtist, setBottomArtist] = useState<string>('')

  const welcomeProps = {
    setTopArtist,
    setBottomArtist,
    setIsWelcome,
    isWelcome,
  }
  const playHotSeatProps = {
    topArtist,
    bottomArtist,
  }

  return (
    <>
      <div className={!isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <Welcome {...welcomeProps} />
      </div>
      <div className={isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <CanvasProvider>
          <PlayHotSeat {...playHotSeatProps} {...welcomeProps} />
        </CanvasProvider>
      </div>
    </>
  )
}

export default HotSeatMode
