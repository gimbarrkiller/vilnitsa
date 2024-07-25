import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appStateSelectors } from 'store/appStore/selectors';
import { appStateSetState } from 'store/appStore/actionCreators';

import { Button } from 'components';

import styles from './styles.module.scss';

interface ISubMainContainer {
  textBtn?: string;
  title: string;
  subTitle: string;
}

export const SubMainContainer:FC<ISubMainContainer> = memo(({
  textBtn = 'Забронировать',
  title,
  subTitle,
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
      <div className={styles.main_content}>
        <div className={styles.first_container}>
          <Button
            className={styles.first_container_btn}
            isBgTransparent
            onClick={onFormOpen}
          >
            {textBtn}
          </Button>
        </div>

        <div className={styles.second_container}>
          <div className={styles.second_content}>
            <div className={styles.second_container_title}>
              {title}
            </div>
            <div className={styles.second_container_subtitle}>
              {subTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
