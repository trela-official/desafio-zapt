import { Color } from 'model/commom-style-types'

export interface CardProps {
  color?: Color
  noGutter?: boolean
  src?: string
  children?: React.ReactNode
}
