import React from 'react';

import Typography from '../TextComponents/Typography';

import * as Styled from './styles';

export type UserProfileProps = {
  username: string;
  imageProfile: string;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
};

const UserProfile = ({
  imageProfile,
  username,
  textColor = 'primary',
}: UserProfileProps) => (
  <Styled.Wrapper>
    <Styled.Image src={imageProfile} alt="Image profile" />
    <Typography bold="500" size="small" color={textColor}>
      {username}
    </Typography>
  </Styled.Wrapper>
);

export default UserProfile;
