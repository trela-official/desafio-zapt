import React from 'react';

import * as Styled from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Styled.Wrapper aria-label="layout">{children}</Styled.Wrapper>;
};

export default Layout;
