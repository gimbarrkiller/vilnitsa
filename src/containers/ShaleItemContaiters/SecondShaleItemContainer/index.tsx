import React, { FC, memo, useMemo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface ISecondShaleItemContainer {
  subtitleView: string;
  people: number;
  place: number;
}

export const SecondShaleItemContainer:FC<ISecondShaleItemContainer> = memo(({
  subtitleView,
  people,
  place,
}) => {
  const titleData = useMemo(() => (
    <div className={styles.info}>
      <div className={styles.info_content}>
        <div className={styles.info_content_numb}>
          {people}
        </div>
        <div className={styles.info_content_str}>
          человека
        </div>
      </div>

      <div className={styles.info_content}>
        <div className={styles.info_content_numb}>
          {place}
        </div>
        <div className={styles.info_content_str}>
          кв.м
        </div>
      </div>
    </div>
  ), [place, people]);

  return (
    <div className={styles.main_container}>
      <SubMainContainer
        title={titleData}
        subTitle={subtitleView}
        classNameContent={styles.sub_content}
      />
    </div>
  );
});
