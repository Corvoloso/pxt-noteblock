/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from 'react'

import { Input } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  color?: 'primary' | 'secondary'
}

const TextInput: React.FC<TextInputProps> = ({
  color = 'primary',
  ...rest
}) => {
  return <Input type="text" color={color} fullWidth {...rest} />
}

export default TextInput
