import React from 'react';

import Typography from '../TextComponents/Typography';

import * as Styled from './styles';

export type UserProfileProps = {
  username: string;
  imageProfile: string;
};

const UserProfile = ({ imageProfile, username }: UserProfileProps) => (
  <Styled.Wrapper>
    <Styled.Image src={imageProfile} alt="Image profile" />
    <Typography bold="500" size="small" color="black">
      {username}
    </Typography>
  </Styled.Wrapper>
);

export default UserProfile;
