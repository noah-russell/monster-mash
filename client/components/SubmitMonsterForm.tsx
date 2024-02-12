import { useCanvas } from './CanvasContext'
import { useState } from 'react'
import { uploadMonster } from '../apiFunctions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

function SubmitMonsterForm({ topArtist, bottomArtist, gameState }) {
  const { canvasRef, saveCanvasAsImage } = useCanvas()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [monsterName, setMonsterName] = useState<string>('')
  const [nameTooLong, setNameTooLong] = useState<boolean>(false)

  const formData = new FormData()

  const handleMonsterNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newName = event.target.value
    setMonsterName(newName)
    const charCount = newName.split('').length
    if (charCount > 15) {
      setNameTooLong(true)
    } else {
      setNameTooLong(false)
    }
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
    event: React.MouseEvent<HTMLButtonElement>,
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
      <form className={gameState === 2 ? 'vflex' : 'hidden'}>
        <div className="labels">
          <label className="vflex">
            <h3>Name your monster:</h3>
            <p className={nameTooLong ? `` : `hidden`}>name too long!</p>
            <br />
            <input
              type="text"
              name="name"
              value={monsterName}
              maxLength={16}
              onChange={handleMonsterNameChange}
              required
            />
          </label>
        </div>
        <br />
      </form>
      <button
        className={gameState === 2 ? 'download' : 'hidden'}
        onClick={saveCanvasAsImage}
      >
        <p>Download</p>
      </button>
      <button
        className={gameState === 2 ? 'save-monster' : 'hidden'}
        onClick={uploadMonsterToMenagerie}
        disabled={!monsterName.trim() || nameTooLong}
      >
        <p>Save to Monster Menagerie</p>
      </button>
    </>
  )
}

export default SubmitMonsterForm
