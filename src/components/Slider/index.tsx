import React, {
  FC, useCallback,
  useMemo, useRef,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import cn from 'classnames';

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
  isControl?: boolean;
}

export const Slider:FC<ISlider> = ({
  classNameContainer,
  images,
  list,
  countImgs,
  isControl = true,
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

  const swiperRef = useRef(null);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  return (
    <div className={cn(classNameContainer, !isControl ? 'not_control' : '')}>
      {!isControl && (
        <>
          <button
            onClick={handlePrev}
            className="swiper-button-prev"
          />
          <button
            onClick={handleNext}
            className="swiper-button-next"
          />
        </>
      )}

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides
        slidesPerView={countSlider}
        navigation={isControl}
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
