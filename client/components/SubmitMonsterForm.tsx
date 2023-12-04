import { Form } from 'react-router-dom'
import { useCanvas } from './CanvasContext'
import { useEffect, useState } from 'react'

function SubmitMonsterForm() {

  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const [blob, setBlob] = useState()
  const formData = new FormData();

  const generateBlob = async () => {
    const dataURL = canvasRef.current.toDataURL('image/png')
    const blobData = await fetch(dataURL).then((res) => res.blob())
    setBlob(blobData);
    formData.append('canvasImage', blob)
  }

  console.log(formData)
  

  return (
    <>
      <button onClick={saveCanvasAsImage}>Save as Image</button>
      <button onClick={generateBlob}>Save to Gallery</button>
    </>
  )
}

export default SubmitMonsterForm
