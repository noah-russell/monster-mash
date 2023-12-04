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
    <div className='menagerie'>
      {monsters && monsters.map((monster) =>{ 
        return(
          <>
            <div className='menagerie-item'>
              <img src={monster.image_url} />
            </div>  
          </>
        )}  
      )}
    </div>
    </>
  )
}

export default Menagerie
