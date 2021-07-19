import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  padding: 80px 80px;
  ${media.lessThan('medium')`
      padding: 40px;
    `}
`
