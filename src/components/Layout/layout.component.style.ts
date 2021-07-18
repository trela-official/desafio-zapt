import styled from 'styled-components'
import media from 'styled-media-query'

export const Layout = styled.main`
  padding: 120px 80px;
  ${media.lessThan('medium')`
      padding: 40px;
    `}
`
