import React, {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';
import { placePowerImage, placePowerManBigImage, placePowerManImage } from 'assets/images';

import { AnimatedDiv, Image, TextGold } from 'components';

import styles from './styles.module.scss';

export const PlacePowerContainer = memo(() => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const { ref, inView } = useInView({
    threshold: 0.5,
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
    <div className={styles.place_container}>
      <div
        ref={ref}
        className={styles.place_content}
      >
        {isView && (
          <AnimatedDiv
            from={-100}
            to={0}
            duration={700}
            opacityFrom={0}
            delay={250}
          >
            <div className={styles.place_title}>
              Место природной силы
              {!isTablet && <br />}
              {' '}
              для комфортного отдыха
              {!isTablet && (
                <AnimatedDiv
                  duration={700}
                  scaleFrom={0.5}
                  delay={150}
                >
                  <Image
                    url={placePowerManBigImage}
                    className={styles.place_content_img}
                  />
                </AnimatedDiv>
              )}
            </div>
          </AnimatedDiv>
        )}
        {isView && (
          <AnimatedDiv
            coordinate="x"
            from={-100}
            to={0}
            duration={700}
            opacityFrom={0}
            delay={250}
          >
            <TextGold
              text="Умиротворение"
              className={styles.place_subtitle}
            />
          </AnimatedDiv>
        )}

        <div className={styles.place_subcontent}>
          <div className={styles.place_subcontent_first}>
            {!isTablet && isView ? (
              <AnimatedDiv
                from={-100}
                to={0}
                duration={700}
                opacityFrom={0}
                delay={1000}
              >
                <div className={styles.place_subcontent_title}>
                  Горы Алтая, с их загадочной тайгой ибурными горными реками
                  - точка притяжения на протяжении столетий
                </div>
              </AnimatedDiv>
            ) : (
              <div className={styles.place_subcontent_title}>
                Горы Алтая, с их загадочной тайгой ибурными горными реками
                - точка притяжения на протяжении столетий
              </div>
            )}
            {!isTablet && isView ? (
              <AnimatedDiv
                from={100}
                to={0}
                duration={700}
                opacityFrom={0}
                delay={1000}
              >
                <div className={styles.place_subcontent_subtitle}>
                  В этой величественной красоте и силе природы таится умиротворение для каждого.
                  Здесь, в уединенном уголке земли есть место, где можно отдохнуть от
                  суеты мегаполиса, забыть о своих проблемах и погрузиться
                  в мир роскоши и уюта – это шале Вольница.
                </div>
              </AnimatedDiv>
            ) : (
              <div className={styles.place_subcontent_subtitle}>
                В этой величественной красоте и силе природы таится умиротворение для каждого.
                Здесь, в уединенном уголке земли есть место, где можно отдохнуть от
                суеты мегаполиса, забыть о своих проблемах и погрузиться
                в мир роскоши и уюта – это шале Вольница.
              </div>
            )}
          </div>
          <div className={styles.place_subcontent_second}>
            {isView && (
              <AnimatedDiv
                duration={700}
                scaleFrom={0.5}
                delay={150}
              >
                <Image
                  url={isTablet ? placePowerManImage : placePowerImage}
                  className={styles.place_subcontent_img}
                />
              </AnimatedDiv>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
