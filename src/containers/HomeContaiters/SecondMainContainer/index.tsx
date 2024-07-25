import React, { memo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

export const SecondMainContainer = memo(() => (
  <div className={styles.main_container}>
    <SubMainContainer
      title="Обретите баланс вдали от городской суеты"
      subTitle="Шале Вольница в горах Алтая – это уникальная возможность погрузиться в мир роскоши и совершенства, наслаждаясь дикой природой̆ и временем, проведенным с близкими."
    />
  </div>
));
