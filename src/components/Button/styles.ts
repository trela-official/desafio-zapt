import styled, { css } from 'styled-components'
import { BtnProps } from '.'

const SizesBtn = {
  small: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.xSmall};
      padding: ${theme.spacings.xSmall} ${theme.spacings.small};
    `}
  `,
  medium: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small} ${theme.spacings.xLarge};
    `}
  `,
  large: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.medium} ${theme.spacings.xxxLarge};
    `}
  `
}

const ColorsBtn = {
  gray: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.gray};

      &:focus {
        box-shadow: 0 0 0 0.2rem #aaaaaa, 0 0.1rem 1.5rem #3e396b80;
      }

      &:hover {
        background-color: ${theme.colors.grayHover};
      }
    `}
  `,
  blue: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};

      &:focus {
        box-shadow: 0 0 0 0.2rem #5872ff, 0 0.1rem 1.5rem #3e396b80;
      }

      &:hover {
        background-color: ${theme.colors.primaryHover};
      }
    `}
  `
}

export const Container = styled.button<BtnProps>`
  ${({ theme, fullWidth, color, size }) => css`
    cursor: pointer;
    border-radius: ${theme.border.radius};
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 0.1rem solid transparent;
    text-shadow: 0 0 0.3rem rgb(0 0 0 / 60%);
    transition: background-color 0.15s ease-in-out;
    width: ${fullWidth ? '100%' : 'fit-content'};
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}

    &:active {
      box-shadow: none;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${theme.colors.disabled};
    }

    span {
      color: ${theme.colors.white};
    }

    svg + span {
      margin-left: 1rem;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: ${theme.colors.white};
    }
  `}
`
