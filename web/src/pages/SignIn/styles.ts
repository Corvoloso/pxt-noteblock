import styled, { keyframes } from 'styled-components'

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    background-color: #fff;

    width: 33%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2.4rem;
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    z-index: 1;

    animation: ${appearFromLeft} 1s;

    > h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    > form {
      width: 100%;
      display: flex;
      flex: 1;

      flex-direction: column;
      justify-content: space-evenly;
      align-items: space-between;

      button {
        width: 100%;
        color: #fff;
        background: #000;

        transition: 0.5s;

        &:hover {
          color: #000;

          border: 1px solid black;
        }
      }
    }
  }
`
