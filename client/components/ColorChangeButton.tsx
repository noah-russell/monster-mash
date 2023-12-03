// ColorChangeButton.js
import { useCanvas } from './CanvasContext'

function ColorChangeButton() {
  const { changeBrushColor } = useCanvas()

  const handleButtonClick = () => {
    changeBrushColor('red')
  }

  return <button onClick={handleButtonClick}>Change Color to Red</button>
}

export default ColorChangeButton

