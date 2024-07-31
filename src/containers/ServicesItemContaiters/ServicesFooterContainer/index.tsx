import React, { FC, memo } from 'react';
import cn from 'classnames';

import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { TextGold } from 'components';

import styles from './styles.module.scss';

interface IFirstShaleItemContainer {
  isActivity?: boolean;
  title?: string;
  titleGold?: string;
  subtitle?: string;
  img?: string;
}

export const ServicesFooterContainer:FC<IFirstShaleItemContainer> = memo(({
  isActivity,
  title,
  titleGold = '',
  subtitle,
  img,
}) => {
  const isLaptop = useScreenWidth(ScreenWidth.laptop);

  return (
    <div
      className={cn(styles.main_container, {
        [styles.main_container_active]: isActivity,
      })}
      style={img ? { backgroundImage: `url(${img})` } : {}}
    >
      <div
        className={cn(styles.main_content, {
          [styles.main_content_active]: isActivity,
        })}
      >
        <div className={styles.main_content_half}>
          <div>
            <div className={styles.main_title}>
              {title}
            </div>
            <TextGold
              text={titleGold}
              className={styles.main_gold_title}
            />
          </div>
          {!isLaptop && <div />}
        </div>
        <div className={styles.main_content_half}>
          {!isLaptop && <div />}
          <div>
            <div
              className={cn(styles.main_subtitle, {
                [styles.main_subtitle_active]: isActivity,
              })}
            >
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
