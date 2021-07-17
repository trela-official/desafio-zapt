import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const SectionHeader = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 6.4rem;
    z-index: ${theme.layers.menu};

    position: sticky;
    top: 0;
    left: auto;
    right: 0;

    background-color: ${theme.colors.white};
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  `}
`

export const Logo = styled.img`
  width: 10rem;
  height: 3rem;
`

export const Content = styled.main`
  ${({ theme }) => css`
    padding-top: calc(${theme.grid.gutter} * 2);
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    padding-top: calc(${theme.grid.gutter} * 2);
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${theme.grid.gutter} 0;
    min-height: 12rem;

    color: ${theme.colors.gray};
  `}
`
