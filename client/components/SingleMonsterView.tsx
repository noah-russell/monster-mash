import {
  getMonsterById,
  deleteMonsterById,
  editMonsterName,
} from '../apiFunctions'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function SingleMonsterView() {
  const id = useParams().id

  const {
    data: monster,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['monster', id],
    queryFn: () => getMonsterById(id),
  })

  const queryClient = useQueryClient()
  const deleteMonsterMutation = useMutation({
    mutationFn: deleteMonsterById,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['monsters'] })
    },
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [newMonsterName, setNewMonsterName] = useState('')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  function handleMonsterDelete(id: number) {
    deleteMonsterMutation.mutate(id)
  }

  const handlePopupOpen = () => {
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  const handleEditMonsterName = async () => {
    await editMonsterName(monster.id, newMonsterName)
    queryClient.invalidateQueries(['monster', id])
    handlePopupClose()
  }

  return (
    <>
      <div>Helloooooooooooo world</div>
      <div className="single-monster-view">
        <p>Monster name:{monster.monster_name}</p>
        <p>
          Artsits: <b>{monster.top_artist}</b> and{' '}
          <b>{monster.bottom_artist}</b>
        </p>
        <p>Date created: {Date(monster.date_created)}</p>
        <img src={'/' + monster.image_url} alt="single monster view" />
        <Link to="/menagerie">
          <button
            onClick={() => {
              handleMonsterDelete(monster.id)
            }}
          >
            Delete!
          </button>
        </Link>
        <button onClick={handlePopupOpen}>Edit Monster Name</button>
      </div>

      {/* Pop-up form */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>Edit Monster Name:</p>
            <input
              type="text"
              value={newMonsterName}
              onChange={(e) => setNewMonsterName(e.target.value)}
            />
            <button onClick={handleEditMonsterName}>Save</button>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleMonsterView
