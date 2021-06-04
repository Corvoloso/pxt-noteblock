/* eslint-disable react/prop-types */
import { ErrorOutline } from '@material-ui/icons'
import React, { InputHTMLAttributes } from 'react'

import { InputContainer, Input } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  form: any
  error?: string
  color?: 'primary' | 'secondary'
}

const TextInput: React.FC<TextInputProps> = ({
  form,
  name,
  error,
  color = 'primary',
  ...rest
}) => {
  return (
    <InputContainer>
      <Input
        type="text"
        name={name}
        color={color}
        onChange={form.handleChange}
        {...rest}
      />

      {error && (
        <span>
          <ErrorOutline />
          <span>{error}</span>
        </span>
      )}
    </InputContainer>
  )
}

export default TextInput
