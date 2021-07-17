import { Color } from 'model/commom-style-types'

export interface CardProps {
  color?: Color
  hasGutter?: boolean
  children?: React.ReactNode
}
