import React from 'react';

import SocialCard, { SocialCardProps } from '../SocialCard';

import * as Styled from './styles';

export type UserCommentsCardProps = {
  backgroundImage: string;
  comment: string;
  username: string;
  image: string;
};

const UserCommentsCard = ({
  backgroundImage = '',
  comment = '',
  username = '',
  image = '',
}: UserCommentsCardProps) => (
  <Styled.Wrapper backgroundImage={backgroundImage}>
    <Styled.SocialCardWrapper>
      <SocialCard comment={comment} username={username} image={image} />
    </Styled.SocialCardWrapper>
  </Styled.Wrapper>
);

export default UserCommentsCard;
