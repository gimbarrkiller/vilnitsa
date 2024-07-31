import React, {
  FC,
  memo, useCallback,
  useEffect, useMemo, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { ScreenWidth } from 'appConstants';
import { useScreenWidth } from 'hooks';

import {
  AnimatedDiv, Slider, TextGold,
} from 'components';

import styles from './styles.module.scss';

interface IServicesYourServices {
  sliderTitle?: string;
  sliderTitleGold?: string;
  slides?: {
    id: number;
    title: string;
    subtitle: string;
    img: string;
  }[];
}

export const ServicesYourServicesContainer:FC<IServicesYourServices> = memo(({
  sliderTitle = '',
  sliderTitleGold = '',
  slides = [],
}) => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [isView, setIsView] = useState(false);

  const onView = useCallback(() => {
    setIsView(true);
  }, [setIsView]);

  useEffect(() => {
    if (inView) {
      onView();
    }
  }, [inView, onView]);

  const slidesView = useMemo(() => (
    slides.length ? slides.map((i) => (
      <div
        key={i.id}
        className={styles.todo_item}
      >
        <div
          className={styles.todo_item_img}
          style={{ backgroundImage: `url(${i?.img})` }}
        />
        <div className={styles.todo_item_title}>
          {i?.title}
        </div>
        <div className={styles.todo_item_subtitle}>
          {i?.subtitle}
        </div>
      </div>
    )) : undefined
  ), [slides]);

  return (
    <div className={styles.todo_container}>
      <div
        ref={ref}
        className={styles.todo_content}
      >
        {isView && (
          <AnimatedDiv
            from={-100}
            to={1}
            coordinate="x"
            duration={325}
            delay={250}
            opacityFrom={0}
            opacityTo={1}
          >
            <div className={styles.todo_title}>
              {sliderTitle}
            </div>
          </AnimatedDiv>
        )}

        {isView && (
          <AnimatedDiv
            from={-100}
            to={1}
            coordinate="x"
            duration={325}
            delay={250}
            opacityFrom={0}
            opacityTo={1}
          >
            <TextGold
              text={sliderTitleGold}
              className={styles.todo_subtitle}
            />
          </AnimatedDiv>
        )}
      </div>
      <Slider
        classNameContainer={styles.slider_bg}
        list={slidesView}
        countImgs={!isTablet ? 2 : undefined}
        isControl={false}
        fullImgs
      />
    </div>
  );
});
