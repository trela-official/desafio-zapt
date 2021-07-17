import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    z-index: ${theme.layers.base};

    .profile-image {
      border-radius: 100%;
      object-fit: cover;
      border: 0.2rem solid ${theme.colors.white};
    }
  `}
`;

export const Info = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    margin-left: ${theme.spacings.xxsmall};

    .profile-name {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.normal};
    }

    .profile-info {
      opacity: 0.8;
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.normal};
    }
  `}
`;
