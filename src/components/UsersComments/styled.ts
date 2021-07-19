import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 1rem;
`
export const Title = styled.h1`
  font-weight: 300;
  font-size: min(4rem, 6vw);
  text-align: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-left: 12px solid white;
  margin-top: 4.8rem;

  ${media.lessThan('small')`
    border: none;
  `}

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: -3px;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      112.99% 451.94% at 0% 100%,
      #000000 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 8px;
    opacity: 0.7;
  }
`

export const CommentWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  max-width: 480px;

  padding: 1rem;
  font-weight: normal;
  z-index: 100;
`

export const CommentDescription = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 300;
  color: var(--white);

  ${media.lessThan('medium')`
    font-size: 1.6rem;
  `}

  ${media.lessThan('small')`
    font-size: 1.4rem;
  `}
`

export const CommentAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  font-weight: 300;
`

export const CommentAvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.6rem;
  color: var(--white);

  p {
    font-size: 1.6rem;
  }

  span {
    margin-top: 0.3rem;
    font-size: 1.2rem;
  }
`
