import React, { memo } from 'react';
import cn from 'classnames';

import { transferCar2Img, transferCarImg } from 'assets/images';

import { SubMainContainer } from 'containers';
import { Image, TextGold } from 'components';

import styles from './styles.module.scss';

export const TransferContainer = memo(() => (
  <div className={styles.transfer_container}>
    <div className={styles.transfer_content}>
      <div className={styles.transfer_title}>
        Трансфер и
        <br />
        заселение
      </div>
      <TextGold
        text="Вдали от цивилизации"
        className={styles.transfer_subtitle}
      />
      <div className={styles.transfer_cars}>
        <div className={styles.transfer_cars_img_container}>
          <Image
            url={transferCar2Img}
            className={styles.transfer_cars_img}
          />
        </div>
        <div className={cn(styles.transfer_cars_img_container, styles.second)}>
          <Image
            url={transferCarImg}
          />
        </div>
      </div>
      <SubMainContainer
        title="Отдых начнётся, как только вы коснётесь Алтайской земли"
        subTitle="Индивидуальный трансфер встретит вас в аэропорту и с комфортом доставит прямо на вертолетную площадку клубного шале."
        classNameSubtitle={styles.transfer_subcontent_subtitle}
        classNameContent={styles.transfer_subcontent}
      />
    </div>
  </div>
));
