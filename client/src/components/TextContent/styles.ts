import styled, {css} from 'styled-components'
import theme from 'styles/theme'


export const Wrapper = styled.p`
    ${({theme}) => css`
        color: red;
        font-size: 16px;
        margin: 0;
    `}
`
