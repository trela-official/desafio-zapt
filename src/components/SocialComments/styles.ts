import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Grid = styled.div`
  ${({ theme }) => css`
    column-count: 1;
    column-gap: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
    column-count: 2;
  `};

    ${media.greaterThan('large')`
    column-count: 3;
  `};
  `}
`
