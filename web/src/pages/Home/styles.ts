import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 1.4rem;
    color: #fff;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  > form {
    display: flex;
    justify-content: space-between;
    width: 50%;

    textarea {
      flex: 1;
      resize: none;
      height: 8rem;
      border-radius: 0.5rem;

      padding: 0.5rem;

      font-size: 1.1rem;
    }

    > button {
      border-radius: 0.5rem;
      margin-left: 0.8rem;
      background-color: #e5e5e5;
    }
  }
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  color: #fff;

  margin-top: 1.2rem;

  > div {
    border-radius: 0.4rem;
    background-color: #242424;

    display: flex;
    flex-direction: row;

    padding: 1rem;

    margin-top: 0.8rem;

    > p {
      display: flex;
      flex: 1;
    }

    > div {
      width: 10%;
      padding: 0;
      margin-top: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`
