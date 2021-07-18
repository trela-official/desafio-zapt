import { HTMLAttributes } from 'react';

import * as S from './styles';

export type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
} & HTMLAttributes<HTMLDivElement>;

const Container = ({ children, as, ...props }: ContainerProps) => (
  <S.Wrapper as={as} {...props}>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default Container;
