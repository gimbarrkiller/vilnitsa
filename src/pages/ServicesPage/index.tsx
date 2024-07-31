import React, { FC, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { ScreenWidth, activeAndServices } from 'appConstants';
import { useScreenWidth } from 'hooks';

import { AnimatedDiv, Button, TextGold } from 'components';

import styles from './styles.module.scss';

export const ServicesPage: FC = () => {
  const isLaptop = useScreenWidth(ScreenWidth.laptop);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onOpenPage = useCallback((page: string) => {
    navigate(page);
  }, [navigate]);

  const data = useMemo(
    () => activeAndServices.find((d) => d.pathname === pathname) || activeAndServices[0],
    [pathname],
  );

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
                {data?.title}
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
                  text={data?.titleGold}
                  className={styles.main_subtitle}
                />
              </AnimatedDiv>
            </AnimatedDiv>
          </div>
        </div>
        <div className={styles.main_bottom_text}>
          {data?.subtitleText}
        </div>

        <div className={styles.services_list}>
          {data.services.map((i) => (
            <div
              key={i.title}
              role={isLaptop ? 'button' : ''}
              tabIndex={0}
              onClick={isLaptop ? () => onOpenPage(i.pathname) : () => {}}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenPage(i.pathname);
                }
              }}
              className={styles.services_item}
            >
              <div
                className={cn(styles.services_item_img, styles.ferme)}
                style={{ backgroundImage: `url(${i.img})` }}
              >
                <Button
                  onClick={() => onOpenPage(i.pathname)}
                  className={styles.services_item_btn}
                >
                  Посмотреть
                </Button>
              </div>
              <div className={styles.services_item_title}>
                {i.title}
              </div>
            </div>
          ))}

        </div>
      </AnimatedDiv>
    </div>
  );
};
