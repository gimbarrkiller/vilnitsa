import React, {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import { transferCar2Img, transferCarImg } from 'assets/images';
import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { SubMainContainer } from 'containers';
import { AnimatedDiv, Image, TextGold } from 'components';

import styles from './styles.module.scss';

export const TransferContainer = memo(() => {
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

  return (
    <div className={styles.transfer_container}>
      <div
        ref={ref}
        className={styles.transfer_content}
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
            <div className={styles.transfer_title}>
              Трансфер и
              <br />
              заселение
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
              text="Вдали от цивилизации"
              className={styles.transfer_subtitle}
            />
          </AnimatedDiv>
        )}

        <div className={styles.transfer_cars}>
          <div className={styles.transfer_cars_img_container}>
            <Image
              url={transferCar2Img}
              className={styles.transfer_cars_img}
            />
          </div>
          <div className={cn(styles.transfer_cars_img_container, styles.second)}>
            {!isTablet && isView ? (
              <AnimatedDiv
                duration={325}
                delay={250}
                scaleFrom={0.5}
              >
                <Image
                  url={transferCarImg}
                />
              </AnimatedDiv>
            ) : (
              <Image
                url={transferCarImg}
              />
            )}
          </div>
        </div>
        <SubMainContainer
          title="Отдых начнётся, как только вы коснётесь Алтайской земли"
          subTitle="Индивидуальный трансфер встретит вас в аэропорту и с комфортом доставит прямо на вертолетную площадку клубного шале."
          classNameSubtitle={styles.transfer_subcontent_subtitle}
          classNameContent={styles.transfer_subcontent}
        />
      </div>
    </div>
  );
});
