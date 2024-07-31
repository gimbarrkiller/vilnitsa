import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { unicum1Img } from 'assets/images';

import { AnimatedDiv, Image, TextGold } from 'components';
import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface IShaleSliderContainer {
  title?: string;
  titleGold?: string;
  img?: string;
  imgMini?: string;
  subtitle?: string;
  subtitleMini?: string;
}

export const ServicesUnicumContainer:FC<IShaleSliderContainer> = memo(({
  title,
  titleGold = '',
  img,
  imgMini,
  subtitle,
  subtitleMini = '',
}) => {
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
                {title}
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
                  text={titleGold}
                  className={styles.main_subtitle}
                />
              </AnimatedDiv>
            </AnimatedDiv>
          )}
          <div>
            <Image url={img || unicum1Img} />
          </div>
        </div>

        <SubMainContainer
          subTitle={subtitleMini}
          title={subtitle}
          classNameContent={styles.sub_content}
          leftContent={imgMini}
          classNameLeft={styles.unicum_half_photo}
        />

      </div>
    </div>
  );
});
