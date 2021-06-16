import styled, { css } from 'styled-components';
import { FiledTextProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type InputProps = Pick<FiledTextProps, 'inputSize'>;

const inputModifiers = {
  normal: () => css`
    height: 3.5rem;
    width: 30rem;
  `,
  huge: () => css`
    height: 4rem;
    width: 40rem;
  `,
};

export const Input = styled.input<InputProps>`
  ${({ theme, inputSize }) => css`
    border: 0.2rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};

    ${!!inputSize && inputModifiers[inputSize!]()}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
