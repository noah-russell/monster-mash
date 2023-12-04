import { useCanvas } from './CanvasContext'

function SubmitMonsterForm() {

  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const [blob, setBlob] = useState()
  const formData = new FormData();

  const generateBlob = async () => {
    const dataURL = canvasRef.current.toDataURL('image/png')
    const blobData = await fetch(dataURL).then((res) => res.blob())
    setBlob(blobData);
    formData.append('file', blob)
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
