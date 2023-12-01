import React from 'react'
import { useCanvas } from './CanvasContext'

const VisibilityButtons = () => {
  const { isTopHalfVisible, toggleTopHalfVisibility } = useCanvas()

  return (
    <div>
      <button onClick={toggleTopHalfVisibility}>
        {isTopHalfVisible ? 'Conceal Top Half' : 'Reveal Top Half'}
      </button>
    </div>
  )
}

export default VisibilityButtons
