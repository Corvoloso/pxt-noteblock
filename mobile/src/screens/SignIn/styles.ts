import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Form = styled.View`
  width: 90%;
`;

export const Input = styled(TextInput)`
  background-color: rgba(0, 0, 0, 0);
  color: #000;
`;
