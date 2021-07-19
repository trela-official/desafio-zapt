import React from 'react';

import { Typography, UserProfile } from 'components';

import * as Styled from './styles';

type Sizes = 'small' | 'medium' | 'xmedium' | 'large';

export type SocialCardProps = {
  comment: string;
  username: string;
  imageProfile: string;
  userSubtext?: string;
  transparent?: boolean;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
  colorUserProfile?: 'black' | 'darkgray' | 'white' | 'primary';
  commentSize?: Sizes;
  usernameSize?: Sizes;
  maxSizeCard?: boolean;
};

const SocialCard = ({
  imageProfile,
  username,
  comment,
  transparent = false,
  maxSizeCard = false,
  textColor = 'primary',
  colorUserProfile = 'primary',
  userSubtext = '',
  commentSize = 'medium',
  usernameSize = 'medium',
}: SocialCardProps) => (
  <Styled.Wrapper maxSizeCard={maxSizeCard} transparent={transparent}>
    <Styled.Comment>
      <Typography size={commentSize} color={textColor}>
        {comment}
      </Typography>
    </Styled.Comment>
    <Styled.UserInformation>
      <UserProfile
        usernameSize={usernameSize}
        subtext={userSubtext}
        textColor={colorUserProfile}
        username={username}
        imageProfile={imageProfile}
      />
    </Styled.UserInformation>
  </Styled.Wrapper>
);

export default SocialCard;
