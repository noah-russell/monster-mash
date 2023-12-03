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
        <div className="controls vflex">
          <img className="controls-img" src="client/public/toolbar.png" />

          <div className="colour-controls">
            <img src="client/public/pencil.png" />
            <img src="client/public/rubber.png" />
          </div>

          <button>
            <p>done</p>
          </button>
        </div>
      </div>
    </>
  )
}
export default PlayHotSeat
