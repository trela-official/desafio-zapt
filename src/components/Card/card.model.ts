import { Color } from 'model/commom-style-types'

export interface CardProps {
  color?: Color
  noGutter?: boolean
  children?: React.ReactNode
}
