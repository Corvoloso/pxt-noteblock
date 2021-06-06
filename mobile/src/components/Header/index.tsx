import React from 'react';
import tailwind from 'tailwind-rn';

import {useAuth} from '../../hooks/auth';
import Button from '../Button';

import pxtLogoImg from '../../assets/png/pxtLogoImg.png';
import {Container, Image} from './styles';

const Header: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <Container>
      <Image style={tailwind('w-12 h-12')} source={pxtLogoImg} />

      <Button icon="power" onPress={signOut} />
    </Container>
  );
};

export default Header;
