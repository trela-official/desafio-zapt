import React from 'react';

import SocialCard from '../SocialCard';

import * as Styled from './styles';

export type UserCommentsCardProps = {
  backgroundImage: string;
  comment: string;
  username: string;
  image: string;
  userSubtext?: string;
};

const UserCommentsCard = ({
  backgroundImage = '',
  comment = '',
  username = '',
  image = '',
  userSubtext = '',
}: UserCommentsCardProps) => (
  <Styled.Wrapper backgroundImage={backgroundImage}>
    <Styled.Overlay />
    <Styled.SocialCardWrapper>
      <SocialCard
        fullSize
        transparent
        textColor="white"
        colorUserProfile="white"
        textSize="xmedium"
        comment={comment}
        username={username}
        image={image}
        userSubtext={userSubtext}
      />
    </Styled.SocialCardWrapper>
  </Styled.Wrapper>
);

export default UserCommentsCard;
