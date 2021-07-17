import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black" | "gray";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

function Heading({
  children,
  color = "white",
  level = 1,
  className,
}: HeadingProps) {
  return (
    <S.Wrapper level={level} color={color} className={className}>
      {children}
    </S.Wrapper>
  );
}

export default Heading;
