import React, { memo } from 'react';
import cn from 'classnames';

import { Slider } from 'components';

import styles from './styles.module.scss';

const circleContent = [
  { count: 70, text: 'га  территории' },
  { count: 4, text: 'шале для заселения' },
  { count: 60, text: 'минут от аэропорта' },
  { count: 40, text: 'км от Горно-Алтайска' },
];

export const SliderContainer = memo(() => (
  <div className={styles.slider_container}>
    <div className={cn(styles.slider_container, styles.second)}>
      <div className={styles.slider_content}>
        <Slider classNameContainer={styles.slider_bg} />
      </div>
      <div className={cn(styles.slider_content, styles.second)}>
        <div className={styles.slider_title}>
          Вольница – клубное шале вдали
          <br />
          от цивилизации в горах Алтая
        </div>
        <div className={styles.slider_subtitle}>
          Шале из срубов многовековых кедров сочетает в себе традиции народов
          и роскошь современности, а сервис премиум класса предвосхищает любые желания.
        </div>
        <div className={styles.circles}>
          {circleContent.map(({ count, text }) => (
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
      </div>
    </div>
  </div>
));
