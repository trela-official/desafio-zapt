import styled from 'styled-components'

type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit'

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
