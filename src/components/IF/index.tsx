import { ReactNode } from 'react'

export type IFProps = {
  children: ReactNode
  condition: boolean
}

export const IF = ({ children, condition }: IFProps) => (
  <>{condition ? children : null}</>
)

export const ELSE = ({ children, condition }: IFProps) => (
  <>{condition ? children : null}</>
)
