import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { unicum1Img, unicumPhoto } from 'assets/images';

import { AnimatedDiv, Image, TextGold } from 'components';
import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface IShaleSliderContainer {
  subtitleSlider?: string;
}

export const ServicesUnicumContainer:FC<IShaleSliderContainer> = memo(() => {
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
      className={styles.unicum_container}
    >
      <div className={styles.unicum_content}>
        <div className={styles.unicum_content_half}>
          {isView && (
            <AnimatedDiv
              from={-100}
              to={0}
              duration={600}
              delay={200}
            >
              <div className={styles.main_title}>
                уникальная возможность - побыть с собой наедине
              </div>

              <AnimatedDiv
                from={-100}
                to={1}
                coordinate="x"
                duration={325}
                delay={200}
                opacityFrom={0}
                opacityTo={1}
              >
                <TextGold
                  text="Уединение"
                  className={styles.main_subtitle}
                />
              </AnimatedDiv>
            </AnimatedDiv>
          )}
          <div>
            <Image url={unicum1Img} />
          </div>
        </div>

        <SubMainContainer
          subTitle="Здесь можно насладиться тишиной̆ и спокойствием, а можно улететь в неизведанные дали в индивидуальный̆ тур на вертолете, поохотиться в дикой̆ тайге и порыбачить в горных реках Алтая."
          classNameContent={styles.sub_content}
          leftContent={unicumPhoto}
          classNameLeft={styles.unicum_half_photo}
        />

      </div>
    </div>
  );
});
