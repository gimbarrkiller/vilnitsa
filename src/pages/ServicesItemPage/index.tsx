import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { dataShales } from 'appConstants';

import {
  FirstServicesItemContainer, SecondServicesItemContainer,
  ServicesTextContainer, ServicesUnicumContainer,
  ServicesTodoContainer, ServicesFooterContainer,
  FormWhiteContainer,
} from 'containers';

import styles from './styles.module.scss';

export const ServicesItemPage: FC = () => {
  const { id } = useParams();

  const data = useMemo(() => dataShales.find((d) => d.id === (Number(id))) || dataShales[0], [id]);

  return (
    <div className={styles.main_container}>
      <FirstServicesItemContainer
        title={data?.title}
      />
      <SecondServicesItemContainer />
      <ServicesTextContainer />
      <ServicesUnicumContainer />
      <ServicesTodoContainer />
      <ServicesFooterContainer />
      <FormWhiteContainer />
    </div>
  );
};
