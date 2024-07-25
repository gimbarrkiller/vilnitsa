import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { appStateSelectors } from 'store/appStore/selectors';
import { appStateSetState } from 'store/appStore/actionCreators';

import { Button, Image } from 'components';

import styles from './styles.module.scss';

interface ISubMainContainer {
  textBtn?: string;
  title: string;
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

  const onFormOpen = useCallback(() => {
    dispatch(appStateSetState({
      isOpenFormBurger: !isOpenFormBurger,
    }));
  }, [dispatch, isOpenFormBurger]);

  return (
    <div className={styles.main_container}>
      <div className={cn(styles.main_content, classNameMainContent)}>
        <div className={styles.first_container}>
          {leftContent ? (
            <Image
              url={leftContent}
              className={styles.first_container_img}
            />
          ) : (
            <Button
              className={styles.first_container_btn}
              isBgTransparent
              onClick={onFormOpen}
            >
              {textBtn}
            </Button>
          )}
        </div>

        <div className={styles.second_container}>
          <div className={cn(styles.second_content, classNameContent)}>
            <div className={styles.second_container_title}>
              {title}
            </div>
            <div className={cn(styles.second_container_subtitle, classNameSubtitle)}>
              {subTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
