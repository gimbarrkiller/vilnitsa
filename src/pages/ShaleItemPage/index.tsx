import React, { FC } from 'react';

import { FirstShaleItemContainer, SecondShaleItemContainer, ShaleSliderContainer } from 'containers';

import styles from './styles.module.scss';

export const ShaleItemPage: FC = () => (
  <div className={styles.main_container}>
    <FirstShaleItemContainer />
    <SecondShaleItemContainer />
    <ShaleSliderContainer />
  </div>
);
