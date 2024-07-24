import React, { memo } from 'react';

import styles from './styles.module.scss';

const nowYear = new Date().getFullYear();

export const Footer = memo(() => (
  <div className={styles.footer}>
    {nowYear}
  </div>
));
