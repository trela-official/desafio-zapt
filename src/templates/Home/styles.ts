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

export const SectionWelcome = styled(Section)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.xl4} auto calc(${theme.spacings.xl4} * 2);
    `}
  `}
`

export const CalloutContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
  `}
`

export const ContentTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.base};
    font-weight: ${theme.font.medium};
  `}
`

export const ContentButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.base};

    ${media.greaterThan('small')`
      flex-direction: row;
    `}
  `}
`

export const CalloutFooter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    margin-top: ${theme.spacings.base};

    a {
      color: ${theme.colors.primaryLight};
      transition: color ${theme.transition.fast};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`
