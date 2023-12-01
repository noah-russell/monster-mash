import Colin from './Colin'
import DrawingZone from './DrawingZone'

function PlayHotSeat() {
  return (
    <>
      <div className="play-hot-seat">
        <Colin />
        <div className="drawing-zone">
          <DrawingZone />
        </div>
        <div className="controls">
          <div className="drawing-tools">
            <img src="client/public/pencil.png" />
            <img src="client/public/rubber.png" />
          </div>
          <button>Done</button>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
