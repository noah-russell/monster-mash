import { Router } from 'express'
import * as db from '../db/monsterDb.ts'
import multer from 'multer'

// import * as db from '../db/db.ts'
// '/api/v1'

const router = Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, 'monsters/')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}.png`)
  },
})

const upload = multer({ storage })

// upload new image
router.post('/add', upload.single('file'), async (req, res) => {
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
    console.log('monster Data For Db')
    console.log(monsterDataForDb)
    const newMonsterId = await db.addMonster(monsterDataForDb)
    res.status(200).json({ newMonsterId })
  } catch (error) {
    console.error('Error in POST /api/v1/artworks/upload:', error)
    res
      .status(500)
      .json({ error: 'Internal Server Error', details: error.message })
  }
})

router.get('/gallery', async (req, res) => {
  try {
    const monsters = await db.getAllMonsters()

    res.json(monsters)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'RAGH BLAH Server Error getAllMonsters' })
  }
})

router.get('/monster/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(404).json({ error: 'id must be a number' })
    return
  }

  try {
    const monster = await db.getMonsterById(id)

    res.json(monster)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'RARGH Server Error getMonsterById' })
  }
})

export default router
