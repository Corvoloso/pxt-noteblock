import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@material-ui/core/Button'
import { ArrowForward, Delete, Edit } from '@material-ui/icons'

// import api from '../../services/api'

import { Container, NotesContainer } from './styles'

interface NotesProps {
  id: string
  message: string
}

const Home: React.FC = () => {
  // const [notes, setNotes] = useState<NotesProps[]>([])
  const [notes, setNotes] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const { handleSubmit, register } = useForm()

  const handleAddNote = useCallback(async (data) => {
    console.log(data)

    // api.post('/messages', {
    //   message,
    // })
  }, [])

  const handleEditNote = useCallback(async () => {
    console.log('Will add edit message via API')
  }, [])

  const handleRemoveNote = useCallback(async () => {
    console.log('Will add remove message via API')
  }, [])

  useEffect(() => {
    console.log('Will search for existing messages via API')
  }, [])

  return (
    <Container>
      <p>Blocos de Nota - PXT</p>

      <form onSubmit={handleSubmit(handleAddNote)}>
        <textarea id="message" {...register('message')} />

        <Button type="submit">
          <ArrowForward />
        </Button>
      </form>

      <NotesContainer>
        Lista de Mensagens
        {notes.map((message) => (
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              nostrum molestias quisquam dolorem repudiandae expedita alias
              rerum veniam quas natus, inventore qui sit quo a ipsa obcaecati ab
              illo beatae?
            </p>

            <div>
              <Button type="submit" color="inherit" onClick={handleEditNote}>
                <Edit />
              </Button>

              <Button type="submit" color="inherit" onClick={handleRemoveNote}>
                <Delete />
              </Button>
            </div>
          </div>
        ))}
      </NotesContainer>
    </Container>
  )
}

export default Home
