import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { useState } from 'react'
import { CanvasProvider } from './CanvasContext'
import SubmitMonsterForm from './SubmitMonsterForm'

function HotSeatMode() {
  const [isWelcome, setIsWelcome] = useState(true)
  const [artistNames, setArtistNames] = useState(['', ''])
  const props = {
    setArtistNames,
    setIsWelcome,
  }
  console.log(isWelcome)
  console.log(artistNames)

  return (
    <>
      <div className={!isWelcome ? 'hot-seat-mode hidden' : 'hot-seat-mode'}>
        <Welcome {...props} />
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
