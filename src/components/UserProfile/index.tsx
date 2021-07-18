import React from 'react';

import { Typography } from 'components';

import * as Styled from './styles';

type Sizes = 'small' | 'medium' | 'xmedium' | 'large';

export type UserProfileProps = {
  username: string;
  subtext?: string;
  imageProfile: string;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
  usernameSize?: Sizes;
};

const UserProfile = ({
  imageProfile,
  username,
  textColor,
  subtext = '',
  usernameSize = 'medium',
}: UserProfileProps) => (
  <Styled.Wrapper>
    <Styled.Image src={imageProfile} alt="Image profile" />
    <Styled.TextWrapper>
      <Typography bold="500" size={usernameSize} color={textColor}>
        {username}
      </Typography>
      <Typography size="xsmall" color={textColor}>
        {!!subtext && subtext}
      </Typography>
    </Styled.TextWrapper>
  </Styled.Wrapper>
);

export default UserProfile;
