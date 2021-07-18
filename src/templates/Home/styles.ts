import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xl4};
  `}
`

export const SectionTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.title};
    font-weight: ${theme.font.light};
    text-align: center;

    padding-bottom: ${theme.spacings.xl3};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xl};
    `}
  `}
`

export const SectionSocialComments = styled(Section)``

export const SocialCommentsWrapper = styled.div`
  ${({ theme }) => css`
    > div {
      display: flex;
      gap: ${theme.grid.gutter};
    }
  `}
`

export const SectionUserComments = styled(Section)``
