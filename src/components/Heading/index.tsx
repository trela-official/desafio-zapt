import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'huge';
};

const Heading = ({ children, size = 'medium' }: HeadingProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
);

export default Heading;
