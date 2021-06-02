import styled from 'styled-components'

import { Input as TextInput } from '@material-ui/core'

export const Input = styled(TextInput)`
  & + div {
    margin-top: 1.6rem;
  }
`
