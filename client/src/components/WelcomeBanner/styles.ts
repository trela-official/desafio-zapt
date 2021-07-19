import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 20px auto 5px;
    padding: 0 ${theme.grid.gutter};
    position: relative;

    @media (max-width: 955px) {
      margin: 0 auto;
      padding: 0;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xxlarge} calc(${theme.spacings.xlarge} * 2);

    background: ${theme.colors.drWhite} url('/img/bg-welcome-banner.svg') right
      no-repeat;
    background-size: contain;

    position: relative;

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.small};

      margin-top: ${theme.spacings.xxsmall};

      max-width: 590px;

      letter-spacing: -0.01em;

      color: ${theme.colors.namaraGrey};
    }

    @media (max-width: 1156px) {
      p {
        max-width: 480px;
      }
    }

    @media (max-width: 1024px) {
      p {
        max-width: 380px;
      }
    }

    @media (max-width: 955px) {
      background: ${theme.colors.drWhite};
      padding: ${theme.spacings.large} ${theme.spacings.medium};

      p {
        max-width: 80%;
      }
    }

    @media (max-width: 550px) {
      p {
        max-width: 100%;
      }
    }
  `}
`

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    h3 {
      margin-bottom: calc(${theme.spacings.xsmall} - 0.4rem);
    }

    button + button {
      margin-left: ${theme.spacings.xsmall};
    }

    @media (max-width: 440px) {
      button {
        width: 100%;
        margin-top: ${theme.spacings.xxsmall};

        & + button {
          margin-left: 0;
        }

    }
  `}
`

export const WhatAppContact = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.namaraGrey};
    margin-top: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.primary};
    }

    @media (max-width: 955px) {
      margin-top: ${theme.spacings.xxsmall};
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
    }

    @media (max-width: 550px) {
      padding-left: ${theme.spacings.xsmall};
      padding-right: ${theme.spacings.xsmall};
    }
  `}
`

export const WrapperFloatIcons = styled.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  svg:nth-child(1) {
    width: 62px;
    height: 62px;

    position: absolute;
    top: -19px;
    left: -25px;
  }

  svg:nth-child(2) {
    width: 80px;
    height: 80px;

    position: absolute;
    top: 16px;
    right: 265px;
  }

  svg:nth-child(3) {
    width: 172px;
    height: 105px;

    position: absolute;
    bottom: 37px;
    right: 38px;
  }

  svg:nth-child(4) {
    width: 100px;
    height: 100px;

    position: absolute;
    bottom: -30px;
    right: -43px;
  }

  @media (max-width: 955px) {
    display: none;
  }
`
