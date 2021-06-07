import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const NotesContainer = styled.View`
  width: 90%;

  align-self: center;
`;

export const FormContainer = styled.View`
  margin-vertical: 24px;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const Note = styled.View`
  align-self: center;

  flex-direction: row;
  justify-content: space-between;

  background-color: #2b303a;
  padding: 8px;
  border-radius: 5px;
  margin-top: 12px;
`;

export const NoteText = styled.Text`
  flex: 1;
  color: #fff;
`;

export const ActionsContainer = styled.View``;

export const ActionButton = styled(Button)`
  background-color: #000;
`;
