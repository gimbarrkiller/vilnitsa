import React, {
  FC, memo, ReactNode,
  useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import { appStateSelectors } from 'store/appStore/selectors';
import { appStateSetState } from 'store/appStore/actionCreators';

import { AnimatedDiv, Button, Image } from 'components';

import styles from './styles.module.scss';

interface ISubMainContainer {
  textBtn?: string;
  title?: string | ReactNode;
  subTitle: string;
  classNameSubtitle?: string;
  classNameContent?: string;
  leftContent?: string;
  classNameMainContent?: string;
}

export const SubMainContainer:FC<ISubMainContainer> = memo(({
  textBtn = 'Забронировать',
  title,
  subTitle,
  classNameSubtitle,
  classNameContent,
  classNameMainContent,
  leftContent,
}) => {
  const isOpenFormBurger = useSelector(appStateSelectors.getProp('isOpenFormBurger'));
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.7,
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

  const onFormOpen = useCallback(() => {
    dispatch(appStateSetState({
      isOpenFormBurger: !isOpenFormBurger,
    }));
  }, [dispatch, isOpenFormBurger]);

  return (
    <div
      ref={ref}
      className={styles.main_container}
    >
      <div className={cn(styles.main_content, classNameMainContent)}>
        <div className={styles.first_container}>
          {isView && (leftContent ? (
            <AnimatedDiv
              scaleFrom={0.25}
              duration={1000}
              delay={500}
            >
              <Image
                url={leftContent}
                className={styles.first_container_img}
              />
            </AnimatedDiv>
          ) : (
            <AnimatedDiv
              opacityFrom={0}
              opacityTo={1}
              duration={1000}
              delay={200}
            >
              <Button
                className={styles.first_container_btn}
                isBgTransparent
                onClick={onFormOpen}
              >
                {textBtn}
              </Button>
            </AnimatedDiv>
          ))}
        </div>

        <div className={styles.second_container}>
          <div className={cn(styles.second_content, classNameContent)}>

            {isView && title && (
              <AnimatedDiv
                from={-100}
                to={0}
                opacityFrom={0}
                opacityTo={1}
                duration={700}
                delay={100}
              >
                <div className={styles.second_container_title}>
                  {title}
                </div>
              </AnimatedDiv>
            )}
            {isView && (
              <AnimatedDiv
                from={-100}
                to={0}
                opacityFrom={0}
                opacityTo={1}
                duration={900}
                delay={300}
              >
                <div className={cn(styles.second_container_subtitle, classNameSubtitle)}>
                  {subTitle}
                </div>
              </AnimatedDiv>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
