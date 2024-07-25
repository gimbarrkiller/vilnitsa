import React, { memo } from 'react';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';
import { placePowerImage, placePowerManBigImage, placePowerManImage } from 'assets/images';

import { Image, TextGold } from 'components';

import styles from './styles.module.scss';

export const PlacePowerContainer = memo(() => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);

  return (
    <div className={styles.place_container}>
      <div className={styles.place_content}>
        <div className={styles.place_title}>
          Место природной силы
          {!isTablet && <br />}
          {' '}
          для комфортного отдыха
          {!isTablet && (
            <Image
              url={placePowerManBigImage}
              className={styles.place_content_img}
            />
          )}
        </div>
        <TextGold
          text="Умиротворение"
          className={styles.place_subtitle}
        />
        <div className={styles.place_subcontent}>
          <div className={styles.place_subcontent_first}>
            <div className={styles.place_subcontent_title}>
              Горы Алтая, с их загадочной тайгой ибурными горными реками
              - точка притяжения на протяжении столетий
            </div>
            <div className={styles.place_subcontent_subtitle}>
              В этой величественной красоте и силе природы таится умиротворение для каждого.
              Здесь, в уединенном уголке земли есть место, где можно отдохнуть от
              суеты мегаполиса, забыть о своих проблемах и погрузиться
              в мир роскоши и уюта – это шале Вольница.
            </div>
          </div>
          <div className={styles.place_subcontent_second}>
            <Image
              url={isTablet ? placePowerManImage : placePowerImage}
              className={styles.place_subcontent_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
