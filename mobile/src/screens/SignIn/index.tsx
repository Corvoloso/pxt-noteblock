import {Formik} from 'formik';
import React, {useCallback} from 'react';
import {Button} from 'react-native-paper';
import * as Yup from 'yup';

import tailwind from 'tailwind-rn';

import {Title, Container, Form} from './styles';
import {useAuth} from '../../hooks/auth';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Você deve digitar um email válido')
      .required('Necessário digitar um e-mail'),
    password: Yup.string().required('Necessário digitar uma senha'),
  });

  const handleAuthenticate = useCallback(
    async formData => {
      try {
        await signInSchema.validate(formData, {
          abortEarly: false,
        });

        await signIn(formData);
      } catch (err) {
        console.log(err);
      }
    },
    [signIn, signInSchema],
  );

  return (
    <Container>
      <Title>PXT - Bloco de Notas</Title>

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleAuthenticate}
        validationSchema={signInSchema}>
        {({handleSubmit, handleChange, errors}) => (
          <Form>
            <Input
              name="email"
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <Input
              name="password"
              onChangeText={handleChange('password')}
              secureTextEntry
              style={tailwind('mt-4')}
              placeholder="Senha"
              error={errors.password}
            />

            <Button
              color="#fff"
              contentStyle={tailwind('bg-black')}
              style={tailwind('mt-4')}
              onPress={handleSubmit}>
              Conectar
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
