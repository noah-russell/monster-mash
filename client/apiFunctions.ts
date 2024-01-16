import request from 'superagent'
import { Monster, NewMonster } from '../models/monster-models'
import { response } from 'express'

export async function getAllMonsters() {
  const monsters = await request.get('/api/v1/gallery')
  return monsters.body
}

export async function getMonsterById(id: number) {
  const monster = await request.get(`/api/v1/monster/${id}`)
  return monster.body
}

export async function uploadMonster(formData: FormData) {
  const response = await request.post('api/v1/add').send(formData)
}

export async function deleteMonsterById(id: number) {
  const response = await request.delete(`/api/v1/monster/${id}/delete`)
}

export async function editMonsterName(id: number, newMonsterName: string) {
  const response = await request
    .patch(`/api/v1/monster/${id}/edit`)
    .send({ monster_name: newMonsterName })
  return response.body
}
