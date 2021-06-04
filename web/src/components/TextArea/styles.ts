import styled from 'styled-components'

export const TextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  > textarea {
    height: 8rem;

    resize: none;
    font-size: 1.1rem;

    border-radius: 0.5rem;
    border: 0;
    padding: 0.5rem;

    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  }

  > div {
    position: absolute;

    bottom: -25%;

    display: flex;
    align-items: center;

    color: #da0a0a;

    > span {
      margin-left: 0.6rem;
    }
  }
`
