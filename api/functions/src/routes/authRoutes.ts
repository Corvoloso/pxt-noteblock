import { Router } from 'express'

import firebase from '../config/firebase'

const authRoutes = Router()

authRoutes.post('/', async (request, response) => {
  const { email, password } = request.body

  try {
    const userAuthenticated = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)

    response.status(200).json(userAuthenticated)
  } catch (err) {
    response.status(400).json({
      err,
      message: 'Erro ao tentar se autenticar na rede'
    })
  }
})

export default authRoutes;
