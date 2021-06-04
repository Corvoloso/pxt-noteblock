/* eslint-disable react/prop-types */
import { ErrorOutline } from '@material-ui/icons'
import React, { TextareaHTMLAttributes } from 'react'

import { TextArea } from './styles'

interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string
  form: any
}

const TextInput: React.FC<TextInputProps> = ({ form, name, ...rest }) => {
  return (
    <TextArea>
      <textarea name={name} onChange={form?.handleChange} {...rest} />

      {form.errors.hasOwnProperty('message') ? (
        <div>
          <ErrorOutline />
          <span>{form.errors.message}</span>
        </div>
      ) : undefined}
    </TextArea>
  )
}

export default TextInput
