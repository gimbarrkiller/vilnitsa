import React, {
  memo,
} from 'react';

import {
  bathIcon,
  furnitureIcon, moreIcon,
} from 'assets/images';

import { Image } from 'components';

import styles from './styles.module.scss';

const shaleInfo = [
  {
    id: 1,
    text: [
      'Мебель из кедра, сосны и карагача',
      'Две двуспальные кровати',
      'Ортопедические матрасы',
      'Мини-бар',
      'Чайная станция',
    ],
    icon: furnitureIcon,
  },
  {
    id: 2,
    text: [
      'Медные ванны ручной ковки',
      'Душ, туалет',
      'Бельевая комната',
      'Косметические наборы',
      'Халаты',
    ],
    icon: bathIcon,
  },
  {
    id: 3,
    text: [
      'Камин',
      'Сейф',
      'Wi-fi',
      'Тапочки',
      'Фен',
    ],
    icon: moreIcon,
  },
];

export const ShaleAllAmenitiesContainer = memo(() => (
  <div className={styles.allam_container}>
    <div className={styles.allam_content}>
      <div className={styles.allam_title}>
        В шале
      </div>
      <div className={styles.allam_subtitle}>
        все удобства
      </div>

      <div className={styles.allam_items}>
        {shaleInfo.map(({ id, icon, text }) => (
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
