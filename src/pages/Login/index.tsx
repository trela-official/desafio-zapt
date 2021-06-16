import React from 'react';

import Layout from '../../components/Layout';
import FormLogin from '../../components/FormLogin';

import image from '../../assets/IronManImage.svg';

import * as Styled from './styles';

export default function Login() {
  return (
    <Layout>
      <Styled.Wrapper>
        <FormLogin />
        <Styled.Image>
          <img src={image} alt="" />
        </Styled.Image>
      </Styled.Wrapper>
    </Layout>
  );
}
