import React, { useCallback, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Spinner } from 'react-activity'

import Button from '@material-ui/core/Button'
import { ArrowForward, Delete, Edit, ArrowBack } from '@material-ui/icons'

import api from '../../services/api'
import Header from '../../components/Header'
import TextArea from '../../components/TextArea'

import { Container, NotesContainer } from './styles'

interface NotesProps {
  id: string
  message: string
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState<NotesProps[]>([])
  const [noteToEdit, setNoteToEdit] = useState<NotesProps | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const notesFormSchema = Yup.object().shape({
    message: Yup.string()
      .min(1, 'Você deve digitar algum texto para fazer uma anotação')
      .required('Você deve digitar algum texto para fazer uma anotação'),
  })

  const editNotesFormSchema = Yup.object().shape({
    message: Yup.string()
      .min(1, 'Você deve digitar algum texto para fazer uma anotação')
      .required('Você deve digitar algum texto para editar sua anotação'),
  })

  const handleAddNote = useCallback(
    async (note) => {
      try {
        await notesFormSchema.validate(
          {
            message: note.message || '',
          },
          {
            abortEarly: false,
          },
        )

        const { data } = await api.post('/message', note)

        const newNotes = [data.message, ...notes]

        setNotes(newNotes)
      } catch (err) {
        console.log(err)
      }
    },
    [notes, notesFormSchema],
  )

  const handleStartEditing = useCallback((note) => {
    setNoteToEdit(note)
  }, [])

  const handleEditNote = useCallback(
    async ({ message }) => {
      try {
        if (noteToEdit) {
          await notesFormSchema.validate(
            { message },
            {
              abortEarly: false,
            },
          )

          await api.put(`/message/${noteToEdit.id}`, { message })

          const newNotes = notes

          const foundRemovedIndex = notes.findIndex(
            (note) => note.id === noteToEdit.id,
          )

          newNotes[foundRemovedIndex] = { message, id: noteToEdit.id }

          setNotes(newNotes)
          setNoteToEdit(null)
        }
      } catch (err) {
        console.log('fodeu')
        console.log(err)
      }
    },
    [noteToEdit, notesFormSchema, notes],
  )

  const handleRemoveNote = useCallback(
    async (id) => {
      try {
        await api.delete(`/message/${id}`)

        const foundRemovedNote = notes.find((note) => note.id === id)

        setNotes(notes.filter((note) => note.id !== foundRemovedNote?.id))
      } catch (err) {
        console.log(err)
      }
    },
    [notes],
  )

  const notesForm = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: handleAddNote,
    validationSchema: notesFormSchema,
  })

  const editNotesForm = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: handleEditNote,
    validationSchema: editNotesFormSchema,
  })

  useEffect(() => {
    async function loadNotes() {
      setIsLoading(true)

      try {
        const { data } = await api.get('/message')

        setNotes(data.messages)
      } catch (err) {
        console.log(err)
      }

      setIsLoading(false)
    }

    loadNotes()
  }, [])

  return (
    <Container>
      <Header />

      <h1>Blocos de Nota - PXT</h1>

      {noteToEdit ? (
        <>
          <form onSubmit={editNotesForm.handleSubmit}>
            <TextArea
              name="message"
              form={editNotesForm}
              placeholder="Digite algo para editar a anotação abaixo"
            />

            <Button type="submit">
              <ArrowForward />
            </Button>
          </form>

          <NotesContainer>
            <div key={noteToEdit?.id}>
              <p>{noteToEdit?.message}</p>

              <div>
                <Button
                  type="submit"
                  color="inherit"
                  onClick={() => setNoteToEdit(null)}>
                  <ArrowBack />
                </Button>
              </div>
            </div>
          </NotesContainer>
        </>
      ) : (
        <>
          <form onSubmit={notesForm.handleSubmit}>
            <TextArea
              name="message"
              form={notesForm}
              placeholder="Faça uma anotação para salva-la abaixo"
            />

            <Button type="submit">
              <ArrowForward />
            </Button>
          </form>

          {isLoading ? (
            <Spinner size={36} />
          ) : (
            <NotesContainer>
              <h3>Lista de Mensagens</h3>

              {notes.length > 0 ? (
                notes.map((note) => (
                  <div key={note.id}>
                    <p>{note.message}</p>

                    <div>
                      <Button
                        type="submit"
                        color="inherit"
                        onClick={() => handleStartEditing(note)}>
                        <Edit />
                      </Button>

                      <Button
                        type="submit"
                        color="inherit"
                        onClick={() => handleRemoveNote(note.id)}>
                        <Delete />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p>
                  Não foi encontrado nenhuma anotação, experimente digitar uma
                  nova acima
                </p>
              )}
            </NotesContainer>
          )}
        </>
      )}
    </Container>
  )
}

export default Home
