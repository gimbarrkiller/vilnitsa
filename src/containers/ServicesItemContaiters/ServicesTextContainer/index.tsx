import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { AnimatedDiv } from 'components';

import styles from './styles.module.scss';

interface IShaleSliderContainer {
  subtitleSlider: string;
}

export const ServicesTextContainer:FC<IShaleSliderContainer> = memo(({
  subtitleSlider,
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
      <div className={cn(styles.text_content, styles.second)}>

        {!isTablet && isView ? (
          <AnimatedDiv
            from={-100}
            to={0}
            duration={1000}
            opacityFrom={0}
            delay={1000}
          >
            <div className={styles.text_title}>
              {subtitleSlider}
            </div>
          </AnimatedDiv>
        ) : (
          <div className={styles.text_title}>
            {subtitleSlider}
          </div>
        )}
      </div>
    </div>
  );
});
