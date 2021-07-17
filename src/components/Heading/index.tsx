import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'huge';
  weight?: 'light' | 'normal' | 'medium';
};

const Heading = ({
  children,
  size = 'medium',
  weight = 'normal',
}: HeadingProps) => (
  <S.Wrapper size={size} weight={weight}>
    {children}
  </S.Wrapper>
);

export default Heading;
