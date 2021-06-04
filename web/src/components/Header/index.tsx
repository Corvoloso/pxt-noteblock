import React from 'react'
import { Button } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { useAuth } from '../../hooks/auth'

import pxtLogoImg from '../../assets/png/pxtLogoImg.png'
import { Container } from './styles'

const Header: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <Container>
      <img src={pxtLogoImg} />

      <Button onClick={signOut}>
        <PowerSettingsNewIcon />
      </Button>
    </Container>
  )
}

export default Header
