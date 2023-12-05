import { getMonsterById } from '../apiFunctions'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
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

        <p></p>
      </div>
    </>
  )
}

export default SingleMonsterView
