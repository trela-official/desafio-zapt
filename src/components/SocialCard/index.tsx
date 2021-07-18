import React from 'react';

import { Typography, UserProfile } from 'components';

import * as Styled from './styles';

type Sizes = 'small' | 'medium' | 'xmedium' | 'large';

export type SocialCardProps = {
  comment: string;
  username: string;
  image: string;
  userSubtext?: string;
  transparent?: boolean;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
  colorUserProfile?: 'black' | 'darkgray' | 'white' | 'primary';
  commentSize?: Sizes;
  usernameSize?: Sizes;
  fullSize?: boolean;
};

const SocialCard = ({
  image = '',
  username = '',
  comment = '',
  transparent = false,
  fullSize = false,
  textColor = 'primary',
  colorUserProfile = 'primary',
  userSubtext = '',
  commentSize = 'medium',
  usernameSize = 'medium',
}: SocialCardProps) => (
  <Styled.Wrapper fullSize={fullSize} transparent={transparent}>
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
        imageProfile={image}
      />
    </Styled.UserInformation>
  </Styled.Wrapper>
);

export default SocialCard;
