import connection from './connection.js'
import fs from 'fs/promises'

import {
  NewMonster,
  Monster,
  newMonsterName,
} from '../../models/monster-models.js'

export async function getAllMonsters(): Promise<Monster[]> {
  try {
    const result = await connection('monsters').select('*')
    return result
  } catch (error) {
    console.error('Error in getAllMonsters and Monster DB')
    throw error
  }
}

export async function getMonsterById(id: number): Promise<Monster> {
  try {
    const result = await connection('monsters')
      .where('id', id)
      .select('*')
      .first()
    return result
  } catch (error) {
    console.error('Error in getMonsterById', error)
    throw error
  }
}

export async function addMonster(newMonsterData: NewMonster) {
  try {
    const [insertedId] = await connection('monsters').insert({
      monster_name: newMonsterData.monster_name,
      top_artist: newMonsterData.top_artist,
      bottom_artist: newMonsterData.bottom_artist,
      image_url: newMonsterData.image_url,
      date_created: new Date(),
    })
    return insertedId
  } catch (error) {
    console.error('Error in addArt:', error)
    throw error
  }
}

export async function deleteMonsterById(id: number) {
  try {
    const monster = await connection('monsters').where({ id }).first()
    if (!monster) {
      throw new Error('Monster not found')
    }
    const imageUrl = `public${monster.image_url}`

    await fs.unlink(imageUrl)

    const result = await connection('monsters').where({ id }).delete()
    return result
  } catch (error) {
    console.error('Error on delete monster by id', error)
    throw error
  }
}

export async function editMonsterName(
  id: number,
  editMonsterName: newMonsterName,
) {
  const result = await connection('monsters').where({ id }).update({
    monster_name: editMonsterName.monster_name,
  })
  return result
}
