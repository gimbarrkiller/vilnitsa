import React, { memo, ReactNode } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

type AnimatedProps = {
  children: ReactNode;
  coordinate?: 'x' | 'y';
  from?: number;
  to?: number;
  threshold?: number;
  delay?: number;
  duration?: number;
  opacityFrom?: number;
  opacityTo?: number;
  scaleFrom?: number | string;
  classNameContainer?: string;
};

export const AnimatedDiv = memo(({
  coordinate = 'y',
  from = 0,
  to = 0,
  threshold = 1,
  delay = 0,
  duration = 300,
  opacityFrom,
  opacityTo,
  scaleFrom,
  children,
  classNameContainer,
}: AnimatedProps) => {
  const { ref, inView } = useInView({
    threshold, // процент видимости, при котором срабатывает анимация
  });

  const springs = useSpring({
    from: {
      [coordinate]: from,
      opacity: opacityFrom,
      scale: scaleFrom,
    },
    to: {
      [coordinate]: inView ? to : 0,
      opacity: inView ? opacityTo : 1,
      scale: 1,
    },
    config: {
      duration, // продолжительность анимации
    },
    delay: inView ? delay : delay, // задержка перед запуском анимации (в миллисекундах)
  });

  return (
    <animated.div
      ref={ref} // добавляем ref к элементу
      style={{
        ...springs,
      }}
      className={classNameContainer}
    >
      {children}
    </animated.div>
  );
});
