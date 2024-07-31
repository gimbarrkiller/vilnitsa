import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';

import { PathName, services } from 'appConstants';

import {
  FirstServicesItemContainer, SecondServicesItemContainer,
  ServicesTextContainer, ServicesUnicumContainer,
  ServicesTodoContainer, ServicesFooterContainer,
  FormWhiteContainer, ServicesYourServicesContainer,
  ServicesTextBlackBGContainer, ActivePhoneInfoContainer,
} from 'containers';

import styles from './styles.module.scss';

export const ServicesItemPage: FC = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const data = useMemo(() => services.find((d) => d.id === id) || services[0], [id]);
  const isFerme = useMemo(() => data.id === 'ferme', [data]);
  const isActivity = useMemo(() => pathname.includes(PathName.Activity), [pathname]);
  const isServices = useMemo(() => pathname.includes(PathName.Services), [pathname]);

  return (
    <div className={styles.main_container}>
      {isActivity && (
        <ServicesFooterContainer
          title={data?.titleTop}
          titleGold={data?.titleGoldTop}
          subtitle={data?.subtitleTop}
          img={data?.imgTop}
          isActivity
        />
      )}
      {isActivity && <ActivePhoneInfoContainer />}
      <FirstServicesItemContainer
        title={data?.title}
        titleGold={data?.titleGold}
        imgMain={data?.imgMain}
      />
      <SecondServicesItemContainer
        subtitle={data?.subtitle}
        subtitleText={data?.subtitleText}
        classNameTitle={isActivity ? styles.services_info_title : undefined}
        leftContent={data?.circleContent}
      />
      {isServices && <ServicesTextContainer subtitleSlider={data?.subtitleSlider} />}
      {isActivity && (
        <ServicesTextBlackBGContainer
          subtitleSlider={data?.subtitleSlider}
          subtitleMiniSlider={data?.subtitleMiniSlider}
        />
      )}
      {(isFerme || isActivity) && (
        <ServicesUnicumContainer
          title={data?.unicum?.title}
          titleGold={data?.unicum?.titleGold}
          subtitle={data?.unicum?.subtitle}
          subtitleMini={data?.unicum?.subtitleMini}
          img={data?.unicum?.img}
          imgMini={data?.unicum?.imgMini}
        />
      )}
      {isFerme && <ServicesTodoContainer />}
      {isFerme && (
        <ServicesFooterContainer
          title={data?.titleTop}
          titleGold={data?.titleGoldTop}
          subtitle={data?.subtitleTop}
        />
      )}
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
