import React from 'react';

import Typography from '../TextComponents/Typography';

import * as Styled from './styles';

export type UserProfileProps = {
  username: string;
  subtext?: string;
  imageProfile: string;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
};

const UserProfile = ({
  imageProfile,
  username,
  textColor,
  subtext = '',
}: UserProfileProps) => (
  <Styled.Wrapper>
    <Styled.Image src={imageProfile} alt="Image profile" />
    <Styled.TextWrapper>
      <Typography bold="500" size="small" color={textColor}>
        {username}
      </Typography>
      <Typography size="small" color={textColor}>
        {!!subtext && subtext}
      </Typography>
    </Styled.TextWrapper>
  </Styled.Wrapper>
);

export default UserProfile;
