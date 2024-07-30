import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router';
import cn from 'classnames';

import { PathName, ScreenWidth } from 'appConstants';
import { useScreenWidth } from 'hooks';

import { AnimatedDiv, Button, TextGold } from 'components';

import styles from './styles.module.scss';

export const ServicesPage: FC = () => {
  const isLaptop = useScreenWidth(ScreenWidth.laptop);
  const navigate = useNavigate();

  const onOpenPage = useCallback((page: string) => {
    navigate(page);
  }, [navigate]);

  return (
    <div className={styles.main_container}>
      <AnimatedDiv
        from={-200}
        to={0}
        duration={1000}
      >
        <div
          className={styles.main_container}
        >
          <div className={styles.main_content}>
            <AnimatedDiv
              from={-100}
              to={0}
              duration={600}
              delay={200}
            >
              <h1 className={styles.main_title}>
                Выбор развлечений
              </h1>

              <AnimatedDiv
                from={-100}
                to={1}
                coordinate="x"
                duration={325}
                delay={200}
                opacityFrom={0}
                opacityTo={1}
              >
                <TextGold
                  text="В созвучии с природой"
                  className={styles.main_subtitle}
                />
              </AnimatedDiv>
            </AnimatedDiv>
          </div>
        </div>
        <div className={styles.main_bottom_text}>
          Здесь каждый сможет найти для себя что-то интересное
        </div>

        <div className={styles.services_list}>
          <div
            role={isLaptop ? 'button' : ''}
            tabIndex={0}
            onClick={isLaptop ? () => onOpenPage(PathName.ServicesFerme) : () => {}}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpenPage(PathName.ServicesFerme);
              }
            }}
            className={styles.services_item}
          >
            <div className={cn(styles.services_item_img, styles.ferme)}>
              <Button
                onClick={() => onOpenPage(PathName.ServicesFerme)}
                className={styles.services_item_btn}
              >
                Посмотреть
              </Button>
            </div>
            <div className={styles.services_item_title}>
              Ферма и стрельбище
            </div>
          </div>

          <div
            role={isLaptop ? 'button' : ''}
            tabIndex={0}
            onClick={isLaptop ? () => onOpenPage(PathName.ServicesSauna) : () => {}}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpenPage(PathName.ServicesSauna);
              }
            }}
            className={styles.services_item}
          >
            <div className={cn(styles.services_item_img, styles.sauna)}>
              <Button
                onClick={() => onOpenPage(PathName.ServicesSauna)}
                className={styles.services_item_btn}
              >
                Посмотреть
              </Button>
            </div>
            <div className={styles.services_item_title}>
              Банный комплекс
            </div>
          </div>

          <div
            role={isLaptop ? 'button' : ''}
            tabIndex={0}
            onClick={isLaptop ? () => onOpenPage(PathName.ServicesExcursions) : () => {}}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpenPage(PathName.ServicesExcursions);
              }
            }}
            className={styles.services_item}
          >
            <div className={cn(styles.services_item_img, styles.excursions)}>
              <Button
                onClick={() => onOpenPage(PathName.ServicesExcursions)}
                className={styles.services_item_btn}
              >
                Посмотреть
              </Button>
            </div>
            <div className={styles.services_item_title}>
              Экскурсии
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};
