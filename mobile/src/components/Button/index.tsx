import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tailwind from 'tailwind-rn';

import {ButtonContainer, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon?: string;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({icon, iconSize, children, ...rest}) => {
  return (
    <ButtonContainer style={tailwind('w-4')} color="#fff" {...rest}>
      {icon && <Icon name={icon} color="#fff" size={iconSize || 24} />}

      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
