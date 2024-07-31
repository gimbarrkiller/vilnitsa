import React, {
  FC, memo,
  useCallback, useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import { markerGoldIcon, phoneGoldIcon } from 'assets/images';
import { phoneApp, phoneCoord } from 'appConstants';

import { AnimatedDiv, Image } from 'components';

import styles from './styles.module.scss';

interface ISubMainContainer {
  textBtn?: string;
}

export const ActivePhoneInfoContainer:FC<ISubMainContainer> = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.7,
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
      className={styles.main_container}
    >
      <div className={styles.main_content}>
        <div className={styles.first_container}>
          {isView && (
            <AnimatedDiv
              opacityFrom={0}
              opacityTo={1}
              duration={1000}
              delay={200}
            >
              <div className={styles.first_phone_coord}>
                <div>
                  <Image
                    url={phoneGoldIcon}
                    className={styles.first_phone_coord_img}
                  />
                  <a href={`tel:${phoneApp}`}>
                    {phoneApp}
                  </a>
                </div>
                <div>
                  <Image
                    url={markerGoldIcon}
                    className={styles.first_phone_coord_img}
                  />
                  {phoneCoord}
                </div>
              </div>
            </AnimatedDiv>
          )}
        </div>

        <div className={styles.second_container}>
          {isView && (
            <AnimatedDiv
              from={-100}
              to={0}
              opacityFrom={0}
              opacityTo={1}
              duration={900}
              delay={300}
            >
              <div className={cn(styles.second_container_subtitle, styles.second)}>
                Летом здесь можно рыбачить прямо с пирса, а зимой для гостей
                доступна зимняя рыбалка из лунок. Вы сможете насладиться уловом
                свежей рыбы, которую вам сразу же приготовит шеф-повар.
              </div>
            </AnimatedDiv>
          )}
        </div>
      </div>
    </div>
  );
});
