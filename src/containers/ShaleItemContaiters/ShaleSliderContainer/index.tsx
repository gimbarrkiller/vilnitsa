import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import {
  shale1Img, shale2Img, slideShale1,
} from 'assets/images';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { AnimatedDiv, Slider } from 'components';

import styles from './styles.module.scss';

const images = [
  { img: slideShale1, id: 1 },
  { img: shale2Img, id: 2 },
  { img: shale1Img, id: 3 },
  { img: slideShale1, id: 4 },
  { img: shale2Img, id: 5 },
  { img: shale1Img, id: 6 },
];

interface IShaleSliderContainer {
  subtitleSlider: string;
}

export const ShaleSliderContainer:FC<IShaleSliderContainer> = memo(({ subtitleSlider }) => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const { ref, inView } = useInView({
    threshold: 0.01,
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

  return (
    <div
      ref={ref}
      className={styles.slider_container}
    >
      <div className={cn(styles.slider_container, styles.second)}>
        <div className={styles.slider_content}>
          <Slider
            classNameContainer={styles.slider_bg}
            images={images}
            countImgs={!isTablet ? 2 : undefined}
          />
        </div>
        <div className={cn(styles.slider_content, styles.second)}>

          {!isTablet && isView ? (
            <AnimatedDiv
              from={-100}
              to={0}
              duration={1000}
              opacityFrom={0}
              delay={1000}
            >
              <div className={styles.slider_title}>
                {subtitleSlider}
              </div>
            </AnimatedDiv>
          ) : (
            <div className={styles.slider_title}>
              {subtitleSlider}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
