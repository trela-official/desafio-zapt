import styled from 'styled-components'
import { T } from 'theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Paragraph = styled.p`
  width: 100%;
  margin: 0 auto 2rem auto;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 80rem;
`

export const NavLink = styled.a`
  width: min-content;
  height: min-content;
  margin: 1.5rem auto 3rem auto;
`

export const BtnHome = styled.button`
  text-transform: uppercase;
  //background-color: ${T.colors.secondary};
  padding: 1.7rem 4rem;
  font-weight: 500;
  border-radius: 1rem;
  white-space: nowrap;
  transition: background-color 0.2s linear;

  &:hover {
    //background-color: ${T.colors.primary};
  }
`
