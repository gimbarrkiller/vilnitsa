import React, {
  memo,
} from 'react';

import { dataShales } from 'appConstants';

import { Slider } from 'components';

import styles from './styles.module.scss';

export const ShaleMoreVariantContainer = memo(() => (
  <div className={styles.more_container}>
    <div className={styles.slider_container}>
      <div className={styles.slider_content}>
        <Slider
          classNameContainer={styles.slider_bg}
          list={dataShales}
          countImgs={1}
        />
      </div>
    </div>
  </div>
));
