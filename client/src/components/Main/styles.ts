import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #003ecb;
  color: #fff;
  height: 100%;

  padding: 3rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 3rem;
`

export const Illustration = styled.img`
  width: min(50rem, 90%);
`
