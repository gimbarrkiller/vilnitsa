import React, { memo } from 'react';

import { TextGold } from 'components';

import styles from './styles.module.scss';

export const MainContainer = memo(() => (
  <div className={styles.main_container}>
    <div className={styles.main_content}>
      <h1 className={styles.main_title}>
        Отдых
        <br />
        в гармонии
        <br />
        с природой
        <TextGold
          text="Вольница"
          className={styles.main_subtitle}
        />
      </h1>
    </div>
  </div>
));
