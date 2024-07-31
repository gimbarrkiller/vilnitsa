import React, { FC, memo, useMemo } from 'react';
import cn from 'classnames';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface ISecondShaleItemContainer {
  subtitle: string;
  subtitleText: string;
  classNameTitle?: string;
  leftContent?: { count: number, text: string }[];
}

export const SecondServicesItemContainer:FC<ISecondShaleItemContainer> = memo(({
  subtitle,
  subtitleText,
  classNameTitle,
  leftContent,
}) => {
  const titleData = useMemo(() => (
    <div className={cn(styles.info_content_numb, classNameTitle)}>
      {subtitle}
    </div>
  ), [subtitle]);

  const leftCircle = useMemo(() => (
    leftContent?.length ? (
      <div className={styles.circles}>
        {leftContent.map(({ count, text }) => (
          <div
            key={text}
            className={styles.circles_item}
          >
            <div className={styles.circles_item_title}>
              {count}
            </div>
            <div className={styles.circles_item_subtitle}>
              {text}
            </div>
          </div>
        ))}
      </div>
    ) : undefined
  ), [subtitle]);

  return (
    <div className={styles.main_container}>
      <SubMainContainer
        title={titleData}
        subTitle={subtitleText}
        classNameContent={styles.sub_content}
        leftContentCircle={leftCircle}
      />
    </div>
  );
});
