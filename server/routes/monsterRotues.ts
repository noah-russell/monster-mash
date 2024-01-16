import { Request, Response, Router } from 'express'
import * as db from '../db/monsterDb.ts'
import multer from 'multer'


const router = Router()

// -----------------upload new monster--------------------------------
const storage = multer.diskStorage({
  destination: function (req:Request, file:Express.Multer.File, cb) {
    return cb(null, 'public/')
  },
  filename: function (req:Request, file:Express.Multer.File, cb) {
    return cb(null, `${Date.now()}.png`)
  },
})
const upload = multer({ storage })

router.post('/add', upload.single('file'), async (req:Request, res:Response) => {
  console.log('router is being accessed')
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' })
      return
    }
    const monsterDataForDb = {
      monster_name: req.body.monster_name,
      top_artist: req.body.top_artist,
      bottom_artist: req.body.bottom_artist,
      image_url: `monsters/${req.file.filename}`,
    }
    const newMonsterId = await db.addMonster(monsterDataForDb)
    res.status(200).json({ newMonsterId })
  } catch (error) {
    console.error('Error in POST /api/v1/artworks/upload:', error)
    res
      .status(500)
      .json({ error: 'Internal Server Error', details: error.message })
  }
})

// -----------------get all monsters--------------------------------
router.get('/gallery', async (req:Request, res:Response) => {
  try {
    const monsters = await db.getAllMonsters()
    res.json(monsters)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'RAGH BLAH Server Error getAllMonsters' })
  }
})

// -----------------get monster by id--------------------------------
router.get('/monster/:id', async (req:Request, res:Response) => {
  const id = Number(req.params.id)
  try {
    const monster = await db.getMonsterById(id)
    res.json(monster)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'RARGH Server Error getMonsterById' })
  }
})

// -----------------delete monster--------------------------------
router.delete('/monster/:id/delete', async (req:Request, res:Response) => {
  const id:number = Number(req.params.id)
  await db.deleteMonsterById(id)
  res.json({})
})

// -----------------edit monster name--------------------------------
router.patch('/monster/:id/edit', async (req:Request, res:Response) => {
  const id:number = Number(req.params.id)
  const { monster_name } = req.body
  await db.editMonsterName(id, { monster_name })
  res.json({})
})

export default router
