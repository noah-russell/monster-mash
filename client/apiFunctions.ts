import request from 'superagent'
import { Monster, NewMonster } from '../models/monster-models'
import { response } from 'express'

export async function getAllMonsters(){
  const monsters = await request.get('/api/v1/gallery')
  return monsters.body
}


export async function uploadMonster(formData: FormData){
  const response = await request
  .post('api/v1/add')
  .send(formData)
}