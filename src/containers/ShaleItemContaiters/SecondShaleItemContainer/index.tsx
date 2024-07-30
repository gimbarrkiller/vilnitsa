import React, { memo, useMemo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

export const SecondShaleItemContainer = memo(() => {
  const titleData = useMemo(() => (
    <div className={styles.info}>
      <div className={styles.info_content}>
        <div className={styles.info_content_numb}>
          4
        </div>
        <div className={styles.info_content_str}>
          человека
        </div>
      </div>

      <div className={styles.info_content}>
        <div className={styles.info_content_numb}>
          120
        </div>
        <div className={styles.info_content_str}>
          кв.м
        </div>
      </div>
    </div>
  ), []);

  return (
    <div className={styles.main_container}>
      <SubMainContainer
        title={titleData}
        subTitle="Роскошное VIP шале для небольшой компании. Сруб из массива 300-летнего кедра с двумя спальнями и просторной зоной отдыха с камином."
        classNameContent={styles.sub_content}
      />
    </div>
  );
});
