import styled, {css, DefaultTheme} from 'styled-components'
import theme from 'styles/theme'

import {TitleStylesProps} from '.'


export const Title = styled('h1').attrs<TitleStylesProps>(({level}) => ({
    as:`h${level} `
}))<TitleStylesProps>`
    ${( {color = 'black', fontWeight = 'bold', size = 'xxlarge', lineHeight = 'xlarge'} ) => css `
        color: ${theme.colors[color]};
        font-size: ${theme.font.sizes[size]};
        font-weight: ${theme.font[fontWeight]};
        line-height: ${theme.spacings[lineHeight]};
    `}
`
