import React, { FC } from 'react';

import { FirstShaleContainer, SecondShaleContainer, ListShaleContainer } from 'containers';

import styles from './styles.module.scss';

export const ShalePage: FC = () => (
  <div className={styles.main_container}>
    <FirstShaleContainer />
    <SecondShaleContainer />
    <ListShaleContainer />
  </div>
);
