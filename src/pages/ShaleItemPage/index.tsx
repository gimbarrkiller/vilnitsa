import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { dataShales } from 'appConstants';

import {
  FirstShaleItemContainer, SecondShaleItemContainer,
  ShaleSliderContainer, ShaleAllAmenitiesContainer,
  ShaleMoreVariantContainer,
} from 'containers';

import styles from './styles.module.scss';

export const ShaleItemPage: FC = () => {
  const { id } = useParams();

  const data = useMemo(() => dataShales.find((d) => d.id === (Number(id))) || dataShales[0], [id]);

  return (
    <div className={styles.main_container}>
      <FirstShaleItemContainer
        title={data?.title}
      />
      <SecondShaleItemContainer
        subtitleView={data?.subtitleView}
        people={data.people}
        place={data.place}
      />
      <ShaleSliderContainer
        subtitleSlider={data?.subtitleSlider}
      />
      <ShaleAllAmenitiesContainer
        allAmList={data?.allAmList}
      />
      <ShaleMoreVariantContainer />
    </div>
  );
};
