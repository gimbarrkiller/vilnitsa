import React, {
  memo, useMemo,
} from 'react';
import { useParams } from 'react-router';

import { dataShales } from 'appConstants';

import { ShalePreview, Slider } from 'components';

import styles from './styles.module.scss';

export const ShaleMoreVariantContainer = memo(() => {
  const { id } = useParams();
  const newArr = useMemo(() => dataShales.filter((i) => i.id !== (Number(id))), [id]);

  const shalesView = useMemo(() => (
    newArr.length ? newArr.map((i) => (
      <ShalePreview
        key={i?.id}
        id={i?.id}
        title={i?.title}
        subtitle={i?.subtitle}
        people={i?.people}
        place={i?.place}
        photo={i?.photo}
      />
    )) : undefined
  ), [newArr]);

  return (
    <div className={styles.more_container}>
      <div className={styles.more_title}>
        Другие варианты
      </div>
      <div className={styles.slider_content}>
        <Slider
          classNameContainer={styles.slider_bg}
          list={shalesView}
          countImgs={1}
          isControlTop
        />
      </div>
    </div>
  );
});
