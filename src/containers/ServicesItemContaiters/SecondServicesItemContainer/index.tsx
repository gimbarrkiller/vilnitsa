import React, { FC, memo, useMemo } from 'react';

import { SubMainContainer } from 'containers';

import styles from './styles.module.scss';

interface ISecondShaleItemContainer {
  subtitleView?: string;
  people?: number;
  place?: number;
}

export const SecondServicesItemContainer:FC<ISecondShaleItemContainer> = memo(() => {
  const titleData = useMemo(() => (
    <div className={styles.info_content_numb}>
      10:00 - 22:00
    </div>
  ), []);

  return (
    <div className={styles.main_container}>
      <SubMainContainer
        title={titleData}
        subTitle="Увидеть уникальные породы диких и домашних животных, покормить их с рук и проникнуться сельским колоритом. В 5 минутах езды от Вольницы наша ферма. Там изготавливают разнообразные сыры из собственного сырья, ароматный̆ мед с местной пасеки, уникальные виды колбас и мясо, которые шеф-повар использует приготовлении блюд."
        classNameContent={styles.sub_content}
      />
    </div>
  );
});
