import * as S from './styles';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
