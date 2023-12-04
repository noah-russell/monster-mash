import { useCanvas } from './CanvasContext'
import { useState } from "react"
import { uploadMonster } from "../apis/apiClient"
import { useMutation, useQueryClient } from '@tanstack/react-query'

function SubmitMonsterForm() {
  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const [blob, setBlob] = useState()
  const formData = new FormData();
  const hardCodedArtists = ['simon', 'cindy']
  const hardCodedMonsterName = ['lemon-breath']

  const queryClient = useQueryClient()

  const uploadArtMutation = useMutation({ 
    mutationFn: uploadMonster, 
    onSuccess: async()=>{
      console.log("invalidate queries loop for add")
      queryClient.invalidateQueries({queryKey:['monsters']})
    }
  })


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
