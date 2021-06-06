import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ButtonContainer, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({icon, children, ...rest}) => {
  return (
    <ButtonContainer color="#fff" {...rest}>
      {icon && <Icon name={icon} color="#fff" size={24} />}

      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
