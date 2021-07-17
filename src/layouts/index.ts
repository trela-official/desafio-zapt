import styled, { css } from 'styled-components'

const Layouts = {
  Container: styled.div`
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 ${theme.spacings.large};
      max-width: ${theme.grid.container};
    `}
  `,
  Col: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `
}

export default Layouts
