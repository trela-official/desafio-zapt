import React from 'react';

import { Typography, UserProfile } from '../../components';

import * as Styled from './styles';

export type SocialCardProps = {
  comment: string;
  username: string;
  image: string;
};

const SocialCard = ({
  comment = '',
  image = '',
  username = '',
}: SocialCardProps) => (
  <Styled.Wrapper>
    <Styled.Comment>
      <Typography size="medium" color="primary">
        {comment}
      </Typography>
    </Styled.Comment>
    <Styled.UserInformation>
      <UserProfile username={username} imageProfile={image} />
    </Styled.UserInformation>
  </Styled.Wrapper>
);

export default SocialCard;
