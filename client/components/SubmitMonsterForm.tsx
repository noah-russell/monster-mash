import { useCanvas } from './CanvasContext'
import { useState } from 'react'
import { uploadMonster } from '../apiFunctions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

function SubmitMonsterForm({ topArtist, bottomArtist, gameState }) {
  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [monsterName, setMonsterName] = useState('')
  const formData = new FormData()

  const handleMonsterNameChange = (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    setMonsterName(event.target.value)
  }

  
  const generateFormDataWithBlob = async () => {
    const dataURL = canvasRef.current.toDataURL('image/png')
    const blobData = await fetch(dataURL).then((res) => res.blob())
    formData.append('file', blobData)
  }
  const uploadMonsterMutation = useMutation({
    mutationFn: uploadMonster,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['monsters'] })
    },
  })

  const uploadMonsterToMenagerie = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    await generateFormDataWithBlob()
    formData.append('monster_name', monsterName)
    formData.append('top_artist', topArtist)
    formData.append('bottom_artist', bottomArtist)
    try {
      uploadMonsterMutation.mutate(formData)
      navigate(`/menagerie`)
    } catch (error) {
      console.error('An error occurred during uploading:', error)
    }
  }

  return (
    <>
      <button onClick={saveCanvasAsImage}>Save as Image</button>
      <button onClick={uploadMonsterToMenagerie}>Save to Gallery</button>

      <form className="vflex">
        <div className='labels'>
        <label className="hflex">
          <h3>Name your child:</h3>
          <input
            type="text"
            name="name"
            // value=
            onChange={handleMonsterNameChange}
          />
        </label>
        </div>
        <br />
      </form>
    </>
  )
}

export default SubmitMonsterForm
