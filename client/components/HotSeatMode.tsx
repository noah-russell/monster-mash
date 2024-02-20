import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'
import { GameTrackerProvider } from './GameTrackerContext'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true)
  const [topArtist, setTopArtist] = useState<string>('')
  const [bottomArtist, setBottomArtist] = useState<string>('')
  const [gameState, setGameState] = useState<number>(0)

  const welcomeProps = {
    setTopArtist,
    setBottomArtist,
    setIsWelcome,
    isWelcome,
    setGameState,
  }
  const playHotSeatProps = {
    topArtist,
    bottomArtist,
    setGameState,
    gameState,
  }

  return (
    <>
      <GameTrackerProvider>
        <div className={!isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
          <Welcome {...welcomeProps} />
        </div>
        <div className={isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
          <CanvasProvider>
            <PlayHotSeat {...playHotSeatProps} {...welcomeProps} />
          </CanvasProvider>
        </div>
      </GameTrackerProvider>
    </>
  )
}

export default HotSeatMode
