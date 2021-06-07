import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Formik} from 'formik';
import tailwind from 'tailwind-rn';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import {
  Container,
  NotesContainer,
  FormContainer,
  Form,
  ErrorContainer,
  Note,
  NoteText,
  ActionsContainer,
  ActionButton,
} from './styles';
import {ActivityIndicator} from 'react-native-paper';

interface NotesProps {
  id: string;
  message: string;
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<NotesProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const notesFormSchema = Yup.object().shape({
    message: Yup.string()
      .min(1, 'Você deve digitar algum texto para fazer uma anotação')
      .required('Você deve digitar algum texto para fazer uma anotação'),
  });
  const editNotesFormSchema = Yup.object().shape({
    message: Yup.string()
      .min(1, 'Você deve digitar algum texto para fazer uma anotação')
      .required('Você deve digitar algum texto para editar sua anotação'),
  });

  const handleAddNote = useCallback(
    async note => {
      try {
        await notesFormSchema.validate(
          {
            message: note.message || '',
          },
          {
            abortEarly: false,
          },
        );

        const {data} = await api.post('/message', note);

        const newNotes = [data.message, ...notes];

        setNotes(newNotes);
      } catch (err) {
        console.log(err);
      }
    },
    [notes, notesFormSchema],
  );

  const handleStartEditing = useCallback(note => {
    setNoteToEdit(note);
  }, []);

  const handleEditNote = useCallback(
    async ({message}) => {
      console.log(message);
      try {
        if (noteToEdit) {
          await editNotesFormSchema.validate(
            {message},
            {
              abortEarly: false,
            },
          );

          await api.put(`/message/${noteToEdit.id}`, {message});

          const newNotes = notes;

          const foundRemovedIndex = notes.findIndex(
            note => note.id === noteToEdit.id,
          );

          newNotes[foundRemovedIndex] = {message, id: noteToEdit.id};

          setNotes(newNotes);
          setNoteToEdit(null);
        }
      } catch (err) {
        console.log('fodeu');
        console.log(err);
      }
    },
    [noteToEdit, editNotesFormSchema, notes],
  );

  const handleDeleteNote = useCallback(
    async id => {
      try {
        await api.delete(`/message/${id}`);

        const foundRemovedNote = notes.find(note => note.id === id);

        setNotes(notes.filter(note => note.id !== foundRemovedNote?.id));
      } catch (err) {
        console.log(err);
      }
    },
    [notes],
  );

  useEffect(() => {
    async function loadNotes() {
      setIsLoading(true);

      try {
        const {data} = await api.get('/message');

        setNotes(data.messages);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    }

    loadNotes();
  }, []);

  return (
    <Container>
      <Header />

      {noteToEdit ? (
        <NotesContainer>
          <Formik
            initialValues={{message: ''}}
            onSubmit={handleEditNote}
            validationSchema={notesFormSchema}>
            {({handleSubmit, handleChange, errors}) => (
              <View>
                <Form>
                  <Input
                    name="message"
                    multiline={true}
                    numberOfLines={4}
                    style={tailwind('w-3/4')}
                    placeholder="Faça uma anotação para salva-la abaixo"
                    onChangeText={handleChange('message')}
                  />

                  <Button
                    icon="chevron-right"
                    iconSize={42}
                    style={tailwind('bg-black')}
                    onPress={handleSubmit}
                  />
                </Form>

                {errors.message && (
                  <ErrorContainer>
                    <Icon name="alert-circle" color="#f00" size={16} />
                    <Text style={tailwind('ml-2 text-sm text-red-600')}>
                      {errors.message}
                    </Text>
                  </ErrorContainer>
                )}
              </View>
            )}
          </Formik>

          <Note style={{elevation: 3}}>
            <NoteText>{noteToEdit.message}</NoteText>

            <ActionsContainer>
              <ActionButton
                icon="chevron-left"
                onPress={() => setNoteToEdit(null)}
              />
            </ActionsContainer>
          </Note>
        </NotesContainer>
      ) : (
        <NotesContainer>
          <Formik
            initialValues={{message: ''}}
            onSubmit={handleAddNote}
            validationSchema={notesFormSchema}>
            {({handleSubmit, handleChange, errors}) => (
              <FormContainer>
                <Form>
                  <Input
                    name="message"
                    multiline={true}
                    numberOfLines={4}
                    style={tailwind('w-3/4')}
                    placeholder="Faça uma anotação para salva-la abaixo"
                    onChangeText={handleChange('message')}
                  />

                  <Button
                    icon="chevron-right"
                    iconSize={42}
                    style={tailwind('bg-black')}
                    onPress={handleSubmit}
                  />
                </Form>

                {errors.message && (
                  <ErrorContainer>
                    <Icon name="alert-circle" color="#f00" size={16} />
                    <Text style={tailwind('ml-2 text-sm text-red-600')}>
                      {errors.message}
                    </Text>
                  </ErrorContainer>
                )}
              </FormContainer>
            )}
          </Formik>

          {isLoading ? (
            <ActivityIndicator color="#000" size="large" />
          ) : (
            <FlatList
              data={notes}
              renderItem={({item}) => (
                <Note style={{elevation: 3}}>
                  <NoteText>{item.message}</NoteText>

                  <ActionsContainer>
                    <ActionButton
                      icon="pencil"
                      onPress={() => handleStartEditing(item)}
                    />

                    <ActionButton
                      icon="close"
                      style={tailwind('w-2 mt-2')}
                      onPress={() => handleDeleteNote(item.id)}
                    />
                  </ActionsContainer>
                </Note>
              )}
              ListEmptyComponent={() => (
                <Text>
                  Não foi encontrado nenhuma anotação, experimente digitar uma
                  nova acima
                </Text>
              )}
            />
          )}
        </NotesContainer>
      )}
    </Container>
  );
};

export default Home;
