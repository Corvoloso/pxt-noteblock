import styled from 'styled-components'

import { Input as TextInput } from '@material-ui/core'

export const InputContainer = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  > span {
    display: flex;
    align-items: center;

    color: #da0a0a;
    font-size: 0.8rem;

    margin-top: 0.6rem;

    > span {
      margin-left: 0.6rem;
    }
  }

  & + div {
    margin-top: 1.2rem;
  }
`

export const Input = styled(TextInput)`
  color: #000;
  font-size: 1rem;

  &::placeholder {
    color: #191919;
  }
`
