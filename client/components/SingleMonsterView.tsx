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
  const [isNameEditPopupOpen, setIsNameEditPopupOpen] = useState<boolean>(false)
  const [newMonsterName, setNewMonsterName] = useState<string>('')
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false)

  function getMounthName(monthNumber: number) {
    switch (monthNumber) {
      case 1:
        return 'January'
      case 2:
        return 'February'
      case 3:
        return 'March'
      case 4:
        return 'April'
      case 5:
        return 'May'
      case 6:
        return 'June'
      case 7:
        return 'July'
      case 8:
        return 'August'
      case 9:
        return 'September'
      case 10:
        return 'October'
      case 11:
        return 'November'
      case 12:
        return 'December'
      default:
        return 'Invalid month number'
    }
  }

  function getDayWithSuffix(day) {
    if (day < 1 || day > 31) {
      return 'Invalid day'
    }
    const lastDigit = day % 10
    let suffix = 'th'
    if (day >= 11 && day <= 13) {
      suffix = 'th'
    } else if (lastDigit === 1) {
      suffix = 'st'
    } else if (lastDigit === 2) {
      suffix = 'nd'
    } else if (lastDigit === 3) {
      suffix = 'rd'
    }
    return `${day}${suffix}`
  }

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  const handleDeletePopupOpen = () => {
    if (isDeletePopupOpen === true) setIsDeletePopupOpen(false)
    else setIsDeletePopupOpen(true)
  }

  function handleMonsterDelete(id: number) {
    deleteMonsterMutation.mutate(id)
  }

  const handleNameEditPopup = () => {
    if (isNameEditPopupOpen === true) setIsNameEditPopupOpen(false)
    else if (isNameEditPopupOpen === false) setIsNameEditPopupOpen(true)
  }

  // const handleNameEditPopupOpen = () => {
  //   setIsNameEditPopupOpen(true)
  // }

  // const handleNameEditPopupClose = () => {
  //   setIsNameEditPopupOpen(false)
  // }

  function downloadMonster() {
    const imageUrl = `/${monster.image_url}`
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${monster.monster_name}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEditMonsterName = async () => {
    await editMonsterName(monster.id, newMonsterName)
    queryClient.invalidateQueries(['monster', id])
    handleNameEditPopup()
  }

  const monsterDate = new Date(monster.date_created)
  const dayNum = getDayWithSuffix(monsterDate.getDate())
  const month = getMounthName(monsterDate.getMonth() + 1)
  const year = monsterDate.getFullYear()
  return (
    <>
      <div className="single-monster-view">
        {isNameEditPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleNameEditPopup}>
                &times;
              </span>
              <p>Edit</p>
              <input
                type="text"
                value={newMonsterName}
                onChange={(e) => setNewMonsterName(e.target.value)}
              />
              <br />
              <button onClick={handleEditMonsterName}>
                <p>Save</p>
              </button>
            </div>
          </div>
        )}

        <div className="single-view-top">
          <div className="single-view-spacer"></div>
          <div className="single-view-monster-window">
            <div className="frame-relative">
              <div className="absolute-div-monster-name">
                <h2>{monster.monster_name}</h2>
                <button onClick={handleNameEditPopup}>
                  <p>Edit</p>
                </button>
              </div>
              <img
                className="details-frame-img"
                src={'/monsters/detailsFrame.png'}
              />
              <img
                className="monster-detail"
                src={'/' + monster.image_url}
                alt="single monster view"
              />
            </div>
          </div>
          <div className="single-view-delete">
            <button onClick={downloadMonster}>
              <p>Download</p>
            </button>
            <div className="delete-button">
              <Link to="/menagerie">
                <button
                  onClick={() => {
                    handleMonsterDelete(monster.id)
                  }}
                >
                  <p>Delete Monster</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="single-view-bottom">
          <div className="creater-details">
            <h3>Created By: </h3>
            <h2>{`${monster.top_artist} `}</h2>
            <h3>&</h3>
            <h2>{` ${monster.bottom_artist}`}</h2>
            <h3>{`on the ${dayNum} of ${month} - ${year}`}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMonsterView
