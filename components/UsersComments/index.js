import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import * as S from './styles';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import NoiseOverlay from '../../public/images/noise-overlay.png';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import apiCarousel from './content';

function UsersComments() {
  SwiperCore.use([Pagination, Navigation]);

  // Fix bug animation/interaction with arrows slide
  const [beginningSlide, setBeginningSlide] = useState(false);
  const [endSlide, setEndSlide] = useState(true);
  useEffect(() => {
    const buttonPrev = document.querySelector('.swiper-button-prev');
    const buttonNext = document.querySelector('.swiper-button-next');

    beginningSlide == true
      ? (buttonPrev.classList.remove('hidde'), (buttonPrev.style.opacity = '1'))
      : (buttonPrev.classList.add('hidde'), (buttonPrev.style.opacity = '0'));
    endSlide == true ? buttonNext.classList.remove('hidde') : buttonNext.classList.add('hidde');
  });
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>O que as pessoas estão achando</S.Title>
        <Swiper
          pagination={{
            clickable: true
          }}
          navigation={true}
          spaceBetween={50}
          breakpoints={{
            675: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            }
          }}
          onSlideChange={(swiper) => {
            swiper.isBeginning == true ? setBeginningSlide(false) : setBeginningSlide(true);
            swiper.isEnd == true ? setEndSlide(false) : setEndSlide(true);
          }}
        >
          {apiCarousel.map(({ imageBg, altImgBg, imageProfile, altImgProfile, testimony, name, state, city }) => (
            <SwiperSlide key={name}>
              <S.Item>
                <S.BgImage>
                  <Image
                    src={imageBg}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    placeholder="blur"
                    alt={altImgBg}
                    title={testimony}
                  />
                </S.BgImage>
                <S.NoiseOverlay>
                  <Image
                    src={NoiseOverlay}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    placeholder="blur"
                    alt="Imagem de ruído para dar efeito a imagem de fundo"
                  />
                </S.NoiseOverlay>
                <S.Overlay />
                <S.ItemProfile>
                  <S.Testimony>”{testimony}”</S.Testimony>
                  <S.Details>
                    <S.Image>
                      <Image
                        src={imageProfile}
                        objectFit="cover"
                        width={40}
                        height={40}
                        quality={100}
                        placeholder="blur"
                        alt={altImgProfile}
                        title={`${name} - ${state}`}
                      />
                    </S.Image>
                    <S.Customer>
                      <S.Name>{name}</S.Name>
                      <S.Address>
                        <S.City>{city}</S.City>
                        <span>•</span>
                        <S.State>{state}</S.State>
                      </S.Address>
                    </S.Customer>
                  </S.Details>
                </S.ItemProfile>
              </S.Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </S.Wrapper>
  );
}

export default UsersComments;
