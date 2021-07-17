import { forwardRef, AnchorHTMLAttributes } from 'react';

export type LinkProps = {
  isExternal?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

import * as S from './styles';

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  { children, isExternal = false, ...props },
  ref
) => (
  <S.Wrapper
    {...(isExternal
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {})}
    ref={ref}
    role="link"
    {...props}
  >
    {children}
  </S.Wrapper>
);

export default forwardRef(Link);
