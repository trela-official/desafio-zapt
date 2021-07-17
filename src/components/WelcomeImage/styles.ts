import styled from 'styled-components';

import image from '../../assets/image.jpg';

export const Wrapper = styled.div`
  background: #ffff url(${image}) no-repeat;
  width: 100%;
  min-height: 31rem;
  max-width: 41rem;
  position: relative;
`;
export const Image = styled.img``;
export const BowWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 4rem;
`;
export const CircleWrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 7rem;
`;
