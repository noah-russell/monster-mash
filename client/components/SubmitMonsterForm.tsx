import { useCanvas } from './CanvasContext'
import { useState } from "react"
import { uploadMonster } from "../apiFunctions"
import { useMutation, useQueryClient } from '@tanstack/react-query'

function SubmitMonsterForm({topArtist, bottomArtist, gameState}) {
  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const formData = new FormData();

  // ____________________________________________________________
  // TO BE REMOVED LATER
  const hardCodedArtists = ['simon', 'cindy']
  const hardCodedMonsterName = 'lemon-breath'
  // Destructure hard coded data so that the code below will 
  // be the same when we add the real values
  
  const top_artist = topArtist
  const bottom_artist = bottomArtist
  const monster_name = hardCodedMonsterName

  // ____________________________________________________________
  // begin mutation

  const queryClient = useQueryClient()

    const generateFormDataWithBlob = async () => {
    const dataURL = canvasRef.current.toDataURL('image/png')
    const blobData = await fetch(dataURL).then((res) => res.blob())
    formData.append('file', blobData)
  }

  const uploadMonsterMutation = useMutation({ 
    mutationFn: uploadMonster, 
    onSuccess: async()=>{
      console.log("invalidate queries loop for add")
      queryClient.invalidateQueries({queryKey:['monsters']})
    }
  })

  const uploadMonsterToMenagerie = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    await generateFormDataWithBlob()
    formData.append("monster_name", monster_name);
    formData.append("top_artist", top_artist);
    formData.append("bottom_artist", bottom_artist);
    try{
      uploadMonsterMutation.mutate(formData)
      console.log('add monster mutation successful on component')
    }catch(error){
      console.error('An error occurred during uploading:', error)
    }
  }

  

  return (
    <>
      <button onClick={saveCanvasAsImage}>Save as Image</button>
      <button onClick={uploadMonsterToMenagerie}>Save to Gallery</button>
    </>
  )
}

export default SubmitMonsterForm
