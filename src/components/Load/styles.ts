import styled from 'styled-components'
import Layouts from 'layouts'

export const Container = styled(Layouts.Col)`
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
`

export const Circle = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 6.4rem;
  min-width: 6.4rem;
  height: 6.4rem;
  min-height: 6.4rem;
  margin: 0.8rem;
  border-width: 0.2rem;
  border-style: solid;
  border-color: #496b9f transparent transparent transparent;
  border-radius: 50%;
  animation: ${({ theme }) => theme.animations.rotate} 1.2s
    cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`
