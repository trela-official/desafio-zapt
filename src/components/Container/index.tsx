import * as S from './styles';

export type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
};

const Container = ({ children, as }: ContainerProps) => (
  <S.Wrapper as={as}>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default Container;
