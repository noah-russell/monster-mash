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
  console.log(monsters)
  return (
    <>
      {monsters.map((monster) => (
        <img src={monster.image_url} />
      ))}
    </>
  )
}

export default Menagerie
