import * as functions from "firebase-functions"

import express from 'express'
import cors from 'cors'

import messageRoutes from './routes/messageRoutes'
import authRoutes from './routes/authRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/message', messageRoutes)

functions.https.onRequest(app);

app.listen(8888, () => {
  console.log('Backend up 🚀')
})
