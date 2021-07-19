import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 38.4rem;
    break-inside: avoid-column;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};

    background: ${theme.colors.moonWhite};

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: 137%;

      letter-spacing: -0.01em;

      color: ${theme.colors.arcadeGlow};

      ::after {
        content: '”';
      }

      ::before {
        content: '“';
      }
    }
  `}
`

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: ${theme.spacings.xsmall};

    img {
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid ${theme.colors.primary};
    }

    span {
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.small};
      line-height: 129%;

      letter-spacing: -0.01em;

      color: ${theme.colors.midnightDreams};
    }
  `}
`
