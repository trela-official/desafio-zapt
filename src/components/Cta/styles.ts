import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { CtaProps } from '.'

export const CtaWrapper = styled.div`
  display: flex;
  max-width: fit-content;
  flex-direction: column;
`

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

type OptionsButtonWrapperProps = Pick<CtaProps, 'hasTwoOptions'>

export const OptionsButtonWrapper = styled.div<OptionsButtonWrapperProps>`
  ${({ theme, hasTwoOptions }) => css`
    display: flex;
    ${media.lessThan('medium')`
      flex-direction: column;
    `}
    gap: ${hasTwoOptions && `${theme.spacings.small}`};
  `}
`
