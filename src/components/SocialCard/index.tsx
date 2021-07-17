import React from 'react';

import { Typography, UserProfile } from '../../components';

import * as Styled from './styles';

export type SocialCardProps = {
  comment: string;
  username: string;
  image: string;
  transparent?: boolean;
  textColor?: 'black' | 'darkgray' | 'white' | 'primary';
  textSize?: 'small' | 'medium' | 'xmedium' | 'large';
  fullSize?: boolean;
};

const SocialCard = ({
  image = '',
  username = '',
  comment = '',
  transparent = false,
  fullSize = false,
  textColor = 'primary',
  textSize = 'medium',
}: SocialCardProps) => (
  <Styled.Wrapper fullSize={fullSize} transparent={transparent}>
    <Styled.Comment>
      <Typography size={textSize} color={textColor}>
        {comment}
      </Typography>
    </Styled.Comment>
    <Styled.UserInformation>
      <UserProfile
        textColor={textColor}
        username={username}
        imageProfile={image}
      />
    </Styled.UserInformation>
  </Styled.Wrapper>
);

export default SocialCard;
