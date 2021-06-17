import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 192rem;
    margin: 0 auto;
    padding: 0 1.6rem;
    overflow: hidden;
    align-items: center;

    @media only screen and (max-width: ${theme.breakpoints.laptop}) {
      position: relative;
      height: 100vh;
    }

    @media only screen and (max-width: ${theme.breakpoints.xm}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
`;
export const Image = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: ${theme.breakpoints.laptop}) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  `}
`;

export const ImageTag = styled(motion.img)`
  ${({ theme }) => css`
    height: 100vh;

    @media only screen and (max-width: ${theme.breakpoints.laptop}) {
      height: 70rem;
      z-index: 0;
    }

    @media only screen and (max-width: ${theme.breakpoints.tablet}) {
      height: 50rem;
      z-index: 0;
    }

    @media only screen and (max-width: ${theme.breakpoints.xm}) {
      height: 32rem;
    }

    @media only screen and (max-width: ${theme.breakpoints.mm}) {
      height: 30rem;
    }
  `}
`;
