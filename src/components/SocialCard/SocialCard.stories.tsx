import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SocialCard, { SocialCardProps } from '.';

export default {
  title: 'Social Comments/SocialCard',
  component: SocialCard,
} as Meta;

export const SocialCardDefault: Story<SocialCardProps> = args => (
  <SocialCard {...args} />
);

SocialCardDefault.args = {
  username: '@LuisCarlos',
  colorUserProfile: 'black',
  image:
    'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
  comment:
    '”Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de um nível que terei que comprar toda semana... Assim não tem academia que secura rsrsrsrs Obrigado Zapt.”',
};
