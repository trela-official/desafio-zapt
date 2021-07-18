import { AlignItems, JustifyContent } from 'model/commom-style-types'
import styled from 'styled-components'

interface HboxProps {
  hAlign?: AlignItems
  vAlign?: JustifyContent
  noGrow?: boolean
}

export const Hbox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`

export const HboxItem = styled.div<HboxProps>`
  flex-direction: column;
  display: flex;
  ${(props) => (!props.noGrow ? 'flex: 1;' : null)}
  justify-content: ${(props) => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${(props) => (props.hAlign ? props.hAlign : 'stretch')};
`

export const HboxSeparator = styled.div`
  width: 8px;
`

export const Separator = styled.div`
  margin-bottom: 16px;
`
