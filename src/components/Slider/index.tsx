import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { mainSlide1, mainSlide2, mainSlide3 } from 'assets/images';
import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { Image } from '../Image';

import 'swiper/swiper-bundle.css';
import './styles.css';

const images = [
  { img: mainSlide1, id: 1 },
  { img: mainSlide2, id: 2 },
  { img: mainSlide3, id: 3 },
  { img: mainSlide1, id: 4 },
  { img: mainSlide2, id: 5 },
  { img: mainSlide3, id: 6 },
];

export const Slider = ({ classNameContainer }: { classNameContainer?: string }) => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const isMobile = useScreenWidth(ScreenWidth.mobile);
  const isDesktop = useScreenWidth(ScreenWidth.desktop);

  const countSlider = useMemo(() => {
    if (isMobile) {
      return 1;
    }
    if (isTablet) {
      return 2;
    }
    if (isDesktop) {
      return 3;
    }
    return 4;
  }, [isTablet, isMobile, isDesktop]);

  return (
    <div className={classNameContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides
        slidesPerView={countSlider}
        navigation
        loop
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map(({ img, id }) => (
          <SwiperSlide
            key={id}
          >
            <Image url={img} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};
