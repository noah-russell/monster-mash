import Colin from './Colin'
import DrawingZone from './DrawingZone'

function PlayHotSeat() {
  return (
    <>
      <div className="play-hot-seat">
        <div className="colin">
          <Colin />
        </div>
        <div className="drawing-zone vflex">
          <div className="canvas">
            <DrawingZone />
          </div>
        </div>
        <div className="controls">
          <div className="colour-controls"></div>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
