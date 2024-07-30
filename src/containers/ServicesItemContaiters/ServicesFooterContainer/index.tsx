import React, { FC, memo } from 'react';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { TextGold } from 'components';

import styles from './styles.module.scss';

interface IFirstShaleItemContainer {
  title?: string;
}

export const ServicesFooterContainer:FC<IFirstShaleItemContainer> = memo(() => {
  const isLaptop = useScreenWidth(ScreenWidth.laptop);

  return (
    <div
      className={styles.main_container}
    >
      <div className={styles.main_content}>
        <div className={styles.main_content_half}>
          <div>
            <div className={styles.main_title}>
              Стрельбище
            </div>
            <TextGold
              text="Зоркость"
              className={styles.main_gold_title}
            />
          </div>
          {!isLaptop && <div />}
        </div>
        <div className={styles.main_content_half}>
          {!isLaptop && <div />}
          <div>
            <div className={styles.main_subtitle}>
              Проверить свои способности в стрельбе и натренировать меткость.
              Для этого не придётся ехать в охотничьи угодья – на стрельбище есть всё необходимое.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
