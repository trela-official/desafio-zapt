import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  gap: 24px;
  max-width: 1250px;
  margin: 50px auto;

  @media(max-width:40rem){
    flex-direction: column;
  }
  `