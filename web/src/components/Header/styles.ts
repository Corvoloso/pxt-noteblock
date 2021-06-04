import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  background-color: #000;

  padding: 2px 20px;

  > img {
    width: 80px;
    height: 80px;
  }

  > button {
    background-color: #000;
    border: 0;

    color: #da0a0a;
    font-size: 2rem;
  }
`
