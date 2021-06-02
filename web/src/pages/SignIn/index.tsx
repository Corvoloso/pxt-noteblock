import React, { useCallback } from 'react'
import { Button } from '@material-ui/core'
import { useFormik } from 'formik'

import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  const handleAuthenticate = useCallback(
    async (formData) => {
      await signIn(formData)
    },
    [signIn],
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleAuthenticate,
  })

  return (
    <Container>
      <div>
        <h1>PXT - Bloco de Notas</h1>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </Container>
  )
}

export default SignIn
