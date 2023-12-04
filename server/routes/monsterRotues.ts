import { Router } from 'express'
import * as db from '../db/monsterDb.ts'

// import * as db from '../db/db.ts'
// '/api/v1'

const router = Router()

router.get('/gallery', async (req, res) => {
  try {
    const monsters = await db.getAllMonsters()

    res.json(monsters)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'RAGH BLAH Server Error getAllMonsters' })
  }
})

export default router
