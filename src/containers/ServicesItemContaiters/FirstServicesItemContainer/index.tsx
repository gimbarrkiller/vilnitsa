import React, { FC, memo } from 'react';

import { AnimatedDiv, TextGold } from 'components';

import styles from './styles.module.scss';

interface IFirstShaleItemContainer {
  title: string;
}

export const FirstServicesItemContainer:FC<IFirstShaleItemContainer> = memo(() => (
  <AnimatedDiv
    from={-200}
    to={0}
    duration={1000}
  >
    <div
      className={styles.main_container}
    >
      <div className={styles.main_content}>
        <AnimatedDiv
          from={-100}
          to={0}
          duration={600}
          delay={200}
        >
          <h1 className={styles.main_title}>
            ФЕРМА И СТРЕЛЬБИЩЕ
          </h1>

          <AnimatedDiv
            from={-100}
            to={1}
            coordinate="x"
            duration={325}
            delay={200}
            opacityFrom={0}
            opacityTo={1}
          >
            <TextGold
              text="Сельский колорит"
              className={styles.main_subtitle}
            />
          </AnimatedDiv>
        </AnimatedDiv>
      </div>
    </div>
  </AnimatedDiv>
));
