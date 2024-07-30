import React, {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import { AnimatedDiv, TextGold } from 'components';

import styles from './styles.module.scss';

export const ServicesTodoContainer = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
    <div className={styles.todo_container}>
      <div
        ref={ref}
        className={styles.todo_content}
      >
        {isView && (
          <AnimatedDiv
            from={-100}
            to={1}
            coordinate="x"
            duration={325}
            delay={250}
            opacityFrom={0}
            opacityTo={1}
          >
            <div className={styles.todo_title}>
              Чем заняться на ферме
            </div>
          </AnimatedDiv>
        )}

        {isView && (
          <AnimatedDiv
            from={-100}
            to={1}
            coordinate="x"
            duration={325}
            delay={250}
            opacityFrom={0}
            opacityTo={1}
          >
            <TextGold
              text="Красота природы"
              className={styles.todo_subtitle}
            />
          </AnimatedDiv>
        )}

        <div className={styles.todo_list}>
          <div
            className={styles.todo_item}
          >
            <div className={cn(styles.todo_item_img, styles.acquaintance)} />
            <div className={styles.todo_item_title}>
              Экскурсии
            </div>
            <div className={styles.todo_item_subtitle}>
              Познакомиться со всеми обитателями фермы и узнать про них много интересного.
            </div>
          </div>
          <div
            className={styles.todo_item}
          >
            <div className={cn(styles.todo_item_img, styles.feeding)} />
            <div className={styles.todo_item_title}>
              Кормление
            </div>
            <div className={styles.todo_item_subtitle}>
              Хотите почувствовать себя«настоящим фермером»? Кролики, птицы,
              овцы и даже бизоныне откажутся от угощения из ваших рук.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
