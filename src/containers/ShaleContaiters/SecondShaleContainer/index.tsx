import React, { memo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

export const SecondShaleContainer = memo(() => (
  <div className={styles.main_container}>
    <SubMainContainer
      subTitle="Бурное течение горной реки Ануй и первозданная нетронутая природа Алтая создают особую атмосферу безмятежности и умиротворения. Премиальный интерьер, удобные ортопедические кровати, живой танец огня в камине и первоклассный сервис – это все про наше шале."
      classNameContent={styles.sub_content}
    />
  </div>
));
