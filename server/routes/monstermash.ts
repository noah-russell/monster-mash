import { Router } from 'express'

// import * as db from '../db/db.ts'

const router = Router()

// router.get('/', async (req, res) => {
//   try {
//     const fruits = await db.getAllFruits()

//     res.json({ fruits: fruits.map((fruit) => fruit.name) })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

export default router
