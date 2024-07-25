import React, { memo } from 'react';

import { timeBeBe, timeOpenImg } from 'assets/images';

import { SubMainContainer } from 'containers';
import { Image, TextGold } from 'components';

import styles from './styles.module.scss';

export const TimeOpenContainer = memo(() => (
  <div className={styles.time_container}>
    <div className={styles.time_content}>
      <div className={styles.time_img_title}>
        <div className={styles.time_title}>
          Время открывать
          <br />
          новые горизонты
        </div>
        <TextGold
          text="Что вас ждет"
          className={styles.time_subtitle}
        />
        <Image
          url={timeOpenImg}
          className={styles.time_img}
        />
      </div>
      <SubMainContainer
        title="Самая уникальная возможность - побыть с собой наедине, насладиться бокалом искусно подобранного вина и вдохнуть манящий̆ воздух вольной̆ жизни"
        subTitle="Здесь можно насладиться тишиной̆ и спокойствием, а можно улететь в неизведанные дали в индивидуальный̆ тур на вертолете, поохотиться в дикой̆ тайге и порыбачить в горных реках Алтая. То самое место, где время останавливается для исполнения самых заветных желаний."
        classNameSubtitle={styles.time_subcontent_subtitle}
        classNameContent={styles.time_subcontent}
        classNameMainContent={styles.time_subcontent_content}
        leftContent={timeBeBe}
      />
    </div>
  </div>
));
