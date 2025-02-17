import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { PathName } from 'appConstants';
import { peopleIcon, placeIcon } from 'assets/images';
import { appStateSetState } from 'store/appStore/actionCreators';
import { appStateSelectors } from 'store/appStore/selectors';

import { Button, Image } from 'components';

import styles from './styles.module.scss';

interface IShalePreview {
  title: string;
  subtitle: string;
  people: number;
  place: number;
  photo: string;
  id: number;
}

export const ShalePreview:FC<IShalePreview> = memo(({
  title,
  subtitle,
  people,
  place,
  photo,
  id,
}) => {
  const isOpenFormBurger = useSelector(appStateSelectors.getProp('isOpenFormBurger'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormOpen = useCallback(() => {
    dispatch(appStateSetState({
      isOpenFormBurger: !isOpenFormBurger,
    }));
  }, [dispatch, isOpenFormBurger]);

  const onOpenShale = useCallback(() => {
    navigate(`${PathName.Shale}/${id}`);
  }, [navigate, id]);

  return (
    <div className={styles.shale_item}>
      <div className={styles.shale_item_info}>
        <div className={styles.shale_item_info_title}>
          {title}
        </div>
        <div className={styles.shale_item_info_data}>
          <div className={styles.shale_item_info_data_first}>
            <Image
              url={peopleIcon}
              className={styles.shale_item_info_img}
            />
            <div>
              До
              {' '}
              {people}
              {' '}
              человек
            </div>
          </div>
          <div className={styles.shale_item_info_data_first}>
            <Image
              url={placeIcon}
              className={styles.shale_item_info_img}
            />
            <div>
              {place}
              {' '}
              кв. м
            </div>
          </div>
        </div>
        <div className={styles.shale_item_info_subtitle}>
          {subtitle}
        </div>
        <div className={styles.shale_item_info_btns}>
          <Button onClick={onFormOpen}>
            Забронировать
          </Button>
          <Button
            onClick={onOpenShale}
            isBgTransparent
            className={styles.shale_item_info_btn}
          >
            Подробнее
          </Button>
        </div>
      </div>
      <div
        className={styles.shale_item_img}
        style={{ backgroundImage: `url(${photo})` }}
      />
    </div>
  );
});
