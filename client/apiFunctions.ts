import request from 'superagent'
import { Monster, NewMonster } from '../models/monster-models'
import { response } from 'express'

export async function getAllMonsters(){
  const monsters = await request.get('/api/v1/gallery')
 // console.log (monsters.body)
  return monsters.body
}
