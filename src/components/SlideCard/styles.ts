import styled, { css } from 'styled-components'
import { TUserComment } from '.'

type WrapperProps = Pick<TUserComment, 'userComment'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ userComment }) => css`
    width: 58.8rem;
    height: 40rem;

    background-image: url(${userComment.backgroundImage});
    filter: brightness(75%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    margin: auto auto ${theme.spacings.medium} ${theme.spacings.medium};
  `}
`
