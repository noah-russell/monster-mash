import { Form } from 'react-router-dom'
import { useCanvas } from './CanvasContext'

function SubmitMonsterForm({ formData }) {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
    changeBrushColor,
    handleMouseLeave,
    saveCanvasAsImage,
    // saveCanvasToGallery,
  } = useCanvas()

  const [addMonsterState, setAddMonsterState] = useState({
    id: '',
    monster_name: '',
    top_artist: '',
    bottom_artist: '',
    date_created: '',
    image_url: '',
  })

  const addMonsterMutation = function handleMonsterNameChange() {}

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addMonsterMutation.mutate(addMonsterState)
  }

  return (
    <div>
      <form action="/" onSubmit={handleSubmit} method="post">
        <label htmlFor="monster_name">Name your Monster: </label>
        <input
          type="text"
          id="monster_name"
          value={taskState.title}
          onChange={handleTitleChange}
          required={true}
          placeholder="Your task title"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default SubmitMonsterForm
