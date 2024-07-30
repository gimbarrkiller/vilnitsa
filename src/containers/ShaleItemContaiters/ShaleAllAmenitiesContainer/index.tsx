import React, {
  FC,
  memo,
} from 'react';

import { Image } from 'components';

import styles from './styles.module.scss';

interface IShaleAllAmenitiesContainer {
  allAmList: {
    id: number,
    text: string[],
    icon: string,
  }[];
}

export const ShaleAllAmenitiesContainer:FC<IShaleAllAmenitiesContainer> = memo(({ allAmList }) => (
  <div className={styles.allam_container}>
    <div className={styles.allam_content}>
      <div className={styles.allam_title}>
        В шале
      </div>
      <div className={styles.allam_subtitle}>
        все удобства
      </div>

      <div className={styles.allam_items}>
        {allAmList.map(({ id, icon, text }) => (
          <div
            key={id}
            className={styles.allam_item}
          >
            <Image
              url={icon}
              className={styles.allam_item_icon}
            />
            <ul>
              {text.map((t) => (
                <li
                  key={t}
                  className={styles.allam_item_text}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
));
