import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { services } from 'appConstants';

import {
  FirstServicesItemContainer, SecondServicesItemContainer,
  ServicesTextContainer, ServicesUnicumContainer,
  ServicesTodoContainer, ServicesFooterContainer,
  FormWhiteContainer, ServicesYourServicesContainer,
} from 'containers';

import styles from './styles.module.scss';

export const ServicesItemPage: FC = () => {
  const { id } = useParams();

  const data = useMemo(() => services.find((d) => d.id === id) || services[0], [id]);
  const isFerme = useMemo(() => data.id === 'ferme', [data]);

  return (
    <div className={styles.main_container}>
      <FirstServicesItemContainer
        title={data?.title}
        titleGold={data?.titleGold}
        imgMain={data?.imgMain}
      />
      <SecondServicesItemContainer
        subtitle={data?.subtitle}
        subtitleText={data?.subtitleText}
      />
      <ServicesTextContainer
        subtitleSlider={data?.subtitleSlider}
      />
      {isFerme && <ServicesUnicumContainer />}
      {isFerme && <ServicesTodoContainer />}
      {isFerme && <ServicesFooterContainer />}
      {!isFerme && (
        <ServicesYourServicesContainer
          sliderTitle={data?.sliderTitle}
          sliderTitleGold={data?.sliderTitleGold}
          slides={data?.slides}
        />
      )}
      <FormWhiteContainer />
    </div>
  );
};
