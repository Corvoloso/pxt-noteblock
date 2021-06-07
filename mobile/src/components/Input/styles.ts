import {TextInput as PaperInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const TextInput = styled(PaperInput)`
  background-color: rgba(0, 0, 0, 0);
  color: #000;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
