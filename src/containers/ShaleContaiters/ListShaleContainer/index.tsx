import React, {
  memo, useCallback,
  useEffect, useMemo, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { dataShales } from 'appConstants';

import { AnimatedDiv, ShalePreview } from 'components';

import styles from './styles.module.scss';

export const ListShaleContainer = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.5,
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

  const shalesList = useMemo(() => (
    dataShales.map(({
      id, title, subtitle,
      people, place, photo,
    }) => (
      <ShalePreview
        key={id}
        id={id}
        title={title}
        subtitle={subtitle}
        people={people}
        place={place}
        photo={photo}
      />
    ))
  ), []);
  return (
    <div
      ref={ref}
    >
      {isView && (
        <AnimatedDiv
          from={-100}
          to={0}
          duration={1000}
          opacityFrom={0}
          delay={700}
          classNameContainer={styles.main_container}
        >
          {shalesList}
        </AnimatedDiv>
      )}
    </div>
  );
});
