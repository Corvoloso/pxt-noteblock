import express from 'express'

import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)

const app = express()
app.use(express.json())

app.post('/message', async (request, response) => {
  const { body } = request

  try {
    const userCredentials = await firebase.auth().createUserWithEmailAndPassword(
      body.email,
      body.password
    )

    console.log(userCredentials)
  } catch (err) {
    response.status(400).json({
      err,
      message: 'puts'
    })
  }

  response.status(200).send('Funcionando Guei')
})

app.listen(8888, () => {
  console.log('App Running 🚀')
})