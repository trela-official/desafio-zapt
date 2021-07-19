import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  height: 313px;
`

export const DetailContainerTop = styled.img`
  position: absolute;
  top: -37px;
  left: -32px;

  ${media.lessThan('small')`
    display: none;
  `}
`

export const DetailContainerBottom = styled.img`
  position: absolute;
  bottom: -30px;
  right: -47px;

  ${media.lessThan('small')`
    display: none;
  `}
`

export const Content = styled.div`
  padding: 5rem 8rem;

  ${media.lessThan('small')`
    padding: 2rem;
  `}
`

export const EntryContent = styled.div`
  h1 {
    font-size: 2.8rem;
    font-weight: 400;
  }

  p {
    color: #7b7b7b;
    font-size: 1.6rem;
    line-height: 1.6;
    margin: 0.5rem 0 2rem 0;
  }
`

export const Call = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  button + button {
    margin-left: 1rem;
  }

  ${media.lessThan('small')`
    button + button {
      padding: 1rem;
      margin-top: 1rem;
    }

  `}
`

export const ImageMask = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
`

export const ImageWrapper = styled.div`
  clip-path: url(#mask);

  ${media.lessThan('medium')`
      display: none;
  `}
`
export const Footer = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #7b7b7b;

  a {
    color: #334bc8;
    text-decoration: underline;
  }
`
