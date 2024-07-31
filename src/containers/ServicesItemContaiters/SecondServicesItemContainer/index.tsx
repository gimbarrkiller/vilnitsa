import React, { FC, memo, useMemo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface ISecondShaleItemContainer {
  subtitle: string;
  subtitleText: string;
}

export const SecondServicesItemContainer:FC<ISecondShaleItemContainer> = memo(({
  subtitle,
  subtitleText,
}) => {
  const titleData = useMemo(() => (
    <div className={styles.info_content_numb}>
      {subtitle}
    </div>
  ), [subtitle]);

  return (
    <div className={styles.main_container}>
      <SubMainContainer
        title={titleData}
        subTitle={subtitleText}
        classNameContent={styles.sub_content}
      />
    </div>
  );
});
