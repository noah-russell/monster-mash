import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState(true)
  // const [artistNames, setArtistNames] = useState(['', ''])
  const [topArtist, setTopArtist] = useState('')
  const [bottomArtist, setBottomArtist] = useState('')

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

  console.log('isWelcome in HotSeatMode', isWelcome)

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
