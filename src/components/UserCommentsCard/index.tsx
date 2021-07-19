import React from 'react';

import { SocialCard } from 'components';

import * as Styled from './styles';

export type UserCommentsCardProps = {
  backgroundImage: string;
  comment: string;
  username: string;
  image: string;
  userSubtext?: string;
};

const UserCommentsCard = ({
  backgroundImage,
  comment,
  username,
  image,
  userSubtext = '',
}: UserCommentsCardProps) => (
  <Styled.Wrapper backgroundImage={backgroundImage}>
    <Styled.Overlay aria-label="overlay" />
    <Styled.SocialCardWrapper>
      <SocialCard
        maxSizeCard
        transparent
        textColor="white"
        colorUserProfile="white"
        usernameSize="medium"
        commentSize="xmedium"
        comment={comment}
        username={username}
        imageProfile={image}
        userSubtext={userSubtext}
      />
    </Styled.SocialCardWrapper>
  </Styled.Wrapper>
);

export default UserCommentsCard;
