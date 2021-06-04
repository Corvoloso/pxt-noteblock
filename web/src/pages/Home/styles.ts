import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 1.4rem;
    color: #000;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  > form {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 1.2rem;

    > button {
      background-color: #000;
      color: #fff;

      border-radius: 0.5rem;
      margin-left: 0.8rem;

      box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    }
  }
`

export const NotesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  color: #fff;

  margin-top: 1.8rem;

  > h3 {
    font-size: 1.2rem;
    align-self: center;
    color: #000;
  }

  > p {
    align-self: center;
    margin-top: 1rem;

    font-size: 1rem;
    color: #000;
  }

  > div {
    border-radius: 0.4rem;
    background-color: #2b303a;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem;
    margin-top: 0.8rem;
    box-shadow: 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);

    > p {
      display: flex;
      flex: 1;

      max-width: 80%;
    }

    > div {
      padding: 0;
      margin-top: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > button {
        background-color: #000;
        box-shadow: 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);

        & + button {
          margin-top: 0.6rem;
        }
      }
    }
  }
`
