import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { logoImage } from 'assets/images';
import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { AnimatedDiv, Image } from 'components';

import styles from './styles.module.scss';

interface IShaleSliderContainer {
  subtitleSlider: string;
  subtitleMiniSlider?: string;
}

export const ServicesTextBlackBGContainer:FC<IShaleSliderContainer> = memo(({
  subtitleSlider,
  subtitleMiniSlider,
}) => {
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
      className={styles.text_container}
    >
      <div className={styles.text_content}>

        {!isTablet && isView ? (
          <AnimatedDiv
            from={-100}
            to={0}
            duration={1000}
            opacityFrom={0}
            delay={1000}
          >

            <div className={styles.text_subcontent}>
              <Image
                url={logoImage}
                className={styles.text_img}
              />
              <div className={styles.text_title}>
                {subtitleSlider}
              </div>
              <div className={styles.text_subtitle}>
                {subtitleMiniSlider}
              </div>
            </div>
          </AnimatedDiv>
        ) : (
          <div className={styles.text_subcontent}>
            <Image
              url={logoImage}
              className={styles.text_img}
            />
            <div className={styles.text_title}>
              {subtitleSlider}
            </div>
            <div className={styles.text_subtitle}>
              {subtitleMiniSlider}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
