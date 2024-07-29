import React, {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimatedDiv, TextGold } from 'components';

import styles from './styles.module.scss';

export const MainContainer = memo(() => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [isView, setIsView] = useState(false);

  const onView = useCallback(() => {
    setIsView(true);
  }, [setIsView]);

  useEffect(() => {
    if (inView) {
      onView();
    }
  }, [inView, onView]);

  return (
    <AnimatedDiv
      from={-200}
      to={0}
      duration={1000}
    >
      <div
        ref={ref}
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
              Отдых
              <br />
              в гармонии
              <br />
              с природой
            </h1>

            {isView && (
              <div className={styles.main_subtitle}>
                <AnimatedDiv
                  from={-100}
                  to={1}
                  coordinate="x"
                  duration={325}
                  delay={200}
                  opacityFrom={0}
                  opacityTo={1}
                >
                  <TextGold text="Вольница" />
                </AnimatedDiv>
              </div>
            )}
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedDiv>
  );
});
