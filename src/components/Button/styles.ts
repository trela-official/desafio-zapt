import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.large}
      ${theme.spacings.xmedium};
    border: 0;
    height: 5.1rem;

    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.white};

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
      background-color: #344ed1;
    }

    &:focus {
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.7);
    }
  `}
`
