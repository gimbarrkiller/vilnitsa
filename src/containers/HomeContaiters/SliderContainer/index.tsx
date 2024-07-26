import React, {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { AnimatedDiv, Slider } from 'components';

import styles from './styles.module.scss';

const circleContent = [
  { count: 70, text: 'га  территории' },
  { count: 4, text: 'шале для заселения' },
  { count: 60, text: 'минут от аэропорта' },
  { count: 40, text: 'км от Горно-Алтайска' },
];

export const SliderContainer = memo(() => {
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
        {!isTablet && isView ? (
          <AnimatedDiv
            scaleFrom={0.5}
            duration={700}
          >
            <div className={styles.slider_content}>
              <Slider classNameContainer={styles.slider_bg} />
            </div>
          </AnimatedDiv>
        ) : (
          <div className={styles.slider_content}>
            <Slider classNameContainer={styles.slider_bg} />
          </div>
        )}
        <div className={cn(styles.slider_content, styles.second)}>

          {!isTablet && isView ? (
            <AnimatedDiv
              from={-100}
              to={0}
              duration={700}
              opacityFrom={0}
              delay={1000}
            >
              <div className={styles.slider_title}>
                Вольница – клубное шале вдали
                <br />
                от цивилизации в горах Алтая
              </div>
            </AnimatedDiv>
          ) : (
            <div className={styles.slider_title}>
              Вольница – клубное шале вдали
              <br />
              от цивилизации в горах Алтая
            </div>
          )}
          {!isTablet && isView ? (
            <AnimatedDiv
              from={100}
              to={0}
              opacityFrom={0}
              duration={700}
              delay={1000}
            >
              <div className={styles.slider_subtitle}>
                Шале из срубов многовековых кедров сочетает в себе традиции народов
                и роскошь современности, а сервис премиум класса предвосхищает любые желания.
              </div>
            </AnimatedDiv>
          ) : (
            <div className={styles.slider_subtitle}>
              Шале из срубов многовековых кедров сочетает в себе традиции народов
              и роскошь современности, а сервис премиум класса предвосхищает любые желания.
            </div>
          )}
          <div className={styles.circles}>
            {circleContent.map(({ count, text }) => (
              <div
                key={text}
                className={styles.circles_item}
              >
                <div className={styles.circles_item_title}>
                  {count}
                </div>
                <div className={styles.circles_item_subtitle}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
