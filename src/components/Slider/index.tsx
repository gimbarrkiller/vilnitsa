import React, { FC, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { Image } from '../Image';
import { ShalePreview } from '../ShalePreview';

import 'swiper/swiper-bundle.css';
import './styles.css';

interface ISlider {
  classNameContainer?: string;
  list?: {
    id: number,
    title: string,
    subtitle: string,
    people: number,
    place: number,
    photo: string,
  }[]
  images?: { img: string, id: number }[];
  countImgs?: number;
}

export const Slider:FC<ISlider> = ({
  classNameContainer,
  images,
  list,
  countImgs,
}) => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const isMobile = useScreenWidth(ScreenWidth.mobile);
  const isDesktop = useScreenWidth(ScreenWidth.desktop);

  const countSlider = useMemo(() => {
    if (countImgs) {
      return countImgs;
    }
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
  }, [isTablet, isMobile, isDesktop, countImgs]);

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
        {list?.length && list.map((i) => (
          <SwiperSlide
            key={i.id}
          >
            <ShalePreview
              key={i.id}
              id={i.id}
              title={i.title}
              subtitle={i.subtitle}
              people={i.people}
              place={i.place}
              photo={i.photo}
            />
          </SwiperSlide>
        ))}
        {images?.length && images.map(({ img, id }) => (
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
