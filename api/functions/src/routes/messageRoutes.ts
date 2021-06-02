import { Router } from 'express'

import firebase from '../config/firebase'
const db = firebase.firestore()

const messageRoutes = Router()

interface messageProps {
  id: string;
  message: string;
}

messageRoutes.get('/', async (_, response) => {
  const messagesFound = await db.collection('messages').get()

  const formattedMessagesFound: messageProps[] = []

  messagesFound.docs.map((message: any) => {
    const data: any = {
      id: message.id,
      ...message.data()
    }

    formattedMessagesFound.push(data)
  })

  response.status(200).json({
    messages: formattedMessagesFound,
  })
})

messageRoutes.post('/', async (request, response) => {
  const { message } = request.body

  try {
    const newMessageRef = await db.collection('messages').add({
      message,
    })

    response.status(200).json({
      success: 'Mensagem salva com sucesso!',
      message: {
        id: newMessageRef.id,
        message: message
      }
    })
  } catch (err) {
    response.status(400).json({
      err
    })
  }
})

messageRoutes.put('/:id', async (request, response) => {
  const { id } = request.params
  const { message } = request.body

  try {
    const messageRef = db.collection("messages").doc(id)

    await messageRef.update({
      message
    })

    response.status(200).json({
      success: 'Mensagem atualizada com sucesso'
    })
  } catch (err) {
    response.status(400).json({
      err
    })
  }
})

messageRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params


  try {
    const messageRef = db.collection("messages").doc(id)

    await messageRef.delete()

    response.status(200).json({
      success: 'Mensagem deletada com sucesso'
    })
  } catch (err) {
    response.status(400).json({
      err
    })
  }
})

export default messageRoutes;
