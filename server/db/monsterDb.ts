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
