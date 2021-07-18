import NextImage from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-height: 31.3rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 31.3rem;
`;

export const Image = styled(NextImage)`
  border-radius: 0 0.4rem 0.4rem 0;
`;

export const CircleImageContainer = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 7.1rem;
`;

export const QuarterCircumferenceImageContainer = styled.div`
  position: absolute;
  bottom: 3.7rem;
  right: 3.8rem;
`;
