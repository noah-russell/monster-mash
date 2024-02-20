import Welcome from './Welcome'
import PlayHotSeat from './PlayHotSeat'
import { CanvasProvider } from './CanvasContext'
import { useGameTracker } from './GameTrackerContext'

function HotSeatMode() {
  const{gamePhase}= useGameTracker()

  return (
    <>
      <div
        className={gamePhase == 0? 'hot-seat-mode' : 'hot-seat-mode hidden'}
      >
        <Welcome />
      </div>
      <div
        className={gamePhase > 0 ? 'hot-seat-mode hidden' : 'hot-seat-mode'}
      >
        <CanvasProvider>
          <PlayHotSeat />
        </CanvasProvider>
      </div>
    </>
  )
}

export default HotSeatMode
