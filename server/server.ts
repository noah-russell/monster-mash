import express from 'express'
import * as Path from 'node:path'

import monsterRoutes from './routes/monsterRotues.ts'

const server = express()

server.use(express.json())

server.use('/api/v1', monsterRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('client/public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.use('/saved-monsters', express.static('/app/storage/monsters'))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
