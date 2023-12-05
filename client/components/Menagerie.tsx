import { getAllMonsters } from '../apiFunctions'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function Menagerie() {
  const {
    data: monsters,
    isLoading,
    isError,
    error,
  } = useQuery(['monsters'], getAllMonsters, {})
  return (
    <>
      <div className="menagerie">
        {monsters &&
          monsters.map((monster) => {
            return (
              <> 
                <Link to={`/monster/${monster.id}`}>
                  <div className="menagerie-item">
                 
                    <img className='monster'
                      src={monster.image_url}
                      alt="Monster gallery thumbnail"
                    />
                     <img className='frame'
                      src='client/public/galleryFrame.png'
                      alt="Monster gallery frame"
                    />
                    <div className = 'plaque'>
                    <h4>{monster.monster_name}</h4>
                    </div>
                 </div> 
                </Link>
              </>
            )
          })}
      </div>
    </>
  )
}

export default Menagerie
