import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: min(4rem, 6vw);
  text-align: center;
`

export const Grid = styled.div`
  column-count: 3;
  column-gap: 20px;
  margin-top: 4.8rem;
  padding: 0 1rem;

  ${media.lessThan('large')`
    column-count: 2;
  `}

  ${media.lessThan('small')`
    column-count: 1;
  `}
`
export const Box = styled.div`
  background-color: var(--blue-300);
  border-radius: 4px;

  padding: 24px 16px;
  margin-bottom: 20px;
  font-size: 1rem;

  break-inside: avoid;
`

export const Comment = styled.p`
  color: var(--blue-900);
  font-size: 1.6rem;
  line-height: 1.4;
  margin-bottom: 1.6rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  span {
    display: block;
    font-weight: 500;
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`
