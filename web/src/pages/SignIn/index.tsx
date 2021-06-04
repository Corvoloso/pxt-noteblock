import React, { useCallback } from 'react'
import { Button } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Você deve digitar um email válido')
      .required('Necessário digitar um e-mail'),
    password: Yup.string().required('Necessário digitar uma senha'),
  })

  const handleAuthenticate = useCallback(
    async (formData) => {
      console.log(formData)

      try {
        await signInSchema.validate(formData, {
          abortEarly: false,
        })

        await signIn(formData)
      } catch (err) {
        console.log(err)
      }
    },
    [signIn, signInSchema],
  )

  const signInForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleAuthenticate,
    validationSchema: signInSchema,
  })

  return (
    <Container>
      <div>
        <h1>PXT - Bloco de Notas</h1>

        <form onSubmit={signInForm.handleSubmit}>
          <div>
            <Input
              name="email"
              placeholder="E-mail"
              form={signInForm}
              error={signInForm.errors.email}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              form={signInForm}
              error={signInForm.errors.password}
            />
          </div>

          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </Container>
  )
}

export default SignIn
