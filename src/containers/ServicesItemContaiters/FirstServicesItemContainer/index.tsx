import React, { FC, memo } from 'react';

import { AnimatedDiv, TextGold } from 'components';

import styles from './styles.module.scss';

interface IFirstServicesItemContainer {
  title: string;
  titleGold: string;
  imgMain: string;
}

export const FirstServicesItemContainer:FC<IFirstServicesItemContainer> = memo(({
  title,
  titleGold,
  imgMain,
}) => (
  <AnimatedDiv
    from={-200}
    to={0}
    duration={1000}
  >
    <div
      className={styles.main_container}
    >
      <div
        className={styles.main_content}
        style={{ backgroundImage: `url(${imgMain})` }}
      >
        <AnimatedDiv
          from={-100}
          to={0}
          duration={600}
          delay={200}
        >
          <h1 className={styles.main_title}>
            {title}
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
              text={titleGold}
              className={styles.main_subtitle}
            />
          </AnimatedDiv>
        </AnimatedDiv>
      </div>
    </div>
  </AnimatedDiv>
));
