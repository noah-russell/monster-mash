import connection from './connection.js'

import { NewMonster, Monster } from '../../models/monster-models.js'

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

export async function addMonster(newMonsterData) {
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
