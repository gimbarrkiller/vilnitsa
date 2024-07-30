import React, {
  memo, useMemo,
} from 'react';
import { useParams } from 'react-router';

import { dataShales } from 'appConstants';

import { Slider } from 'components';

import styles from './styles.module.scss';

export const ShaleMoreVariantContainer = memo(() => {
  const { id } = useParams();
  const newArr = useMemo(() => dataShales.filter((i) => i.id !== (Number(id))), [id]);

  return (
    <div className={styles.more_container}>
      <div className={styles.more_title}>
        Другие варианты
      </div>
      <div className={styles.slider_content}>
        <Slider
          classNameContainer={styles.slider_bg}
          list={newArr}
          countImgs={1}
          isControl={false}
        />
      </div>
    </div>
  );
});
