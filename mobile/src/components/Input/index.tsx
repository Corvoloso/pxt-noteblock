import React from 'react';
import {Text, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tailwind from 'tailwind-rn';

import {TextInput, ErrorContainer} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  error?: any;
}

const Input: React.FC<InputProps> = ({name, error, ...rest}) => {
  return (
    <>
      <TextInput name={name} {...rest} />

      {error && (
        <ErrorContainer>
          <Icon name="alert-circle" color="#f00" size={16} />
          <Text style={tailwind('ml-2 text-sm text-red-600')}>{error}</Text>
        </ErrorContainer>
      )}
    </>
  );
};

export default Input;
