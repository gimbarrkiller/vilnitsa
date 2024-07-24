import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { PathName, phoneApp, ScreenWidth } from 'appConstants';
import {
  burgerIcon, burgerWhiteIcon,
  logoImage, phoneIcon,
} from 'assets/images';
import { useScreenWidth } from 'hooks';

import {
  BurgerMenu, BurgerMenuForm,
  Button, Image,
} from 'components';

import styles from './styles.module.scss';

export const Header = memo(() => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const isMobile = useScreenWidth(ScreenWidth.mobile);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const onBurgerChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onFormChange = useCallback(() => {
    setIsOpenForm(!isOpenForm);
  }, [isOpenForm]);

  const onScrollChange = useCallback(() => {
    setIsScrolling(window.scrollY >= 1);
  }, [setIsScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', onScrollChange);
    return () => {
      window.removeEventListener('scroll', onScrollChange);
    };
  }, [onScrollChange]);

  return (
    <>
      <BurgerMenu
        isOpen={isOpen}
        onBurgerChange={onBurgerChange}
        onFormChange={onFormChange}
      />
      <BurgerMenuForm
        isOpen={isOpenForm}
        onBurgerChange={onFormChange}
      />
      <div
        className={cn(styles.header, {
          [styles.header_fixed]: isScrolling,
        })}
      >
        <div className={styles.header_container}>
          <div className={styles.header_content}>
            <Button
              isBgTransparent
              isIconOnly={isTablet}
              onClick={onBurgerChange}
            >
              {!isTablet ? (
                <Image url={burgerIcon} />
              ) : (
                <Image url={burgerWhiteIcon} />
              )}
              {!isTablet && 'Меню'}
            </Button>
            <Link to={PathName.Home}>
              <Image url={logoImage} />
            </Link>
            <div className={styles.header_contacts}>
              {!isMobile ? (
                <a href={`tel:${phoneApp}`}>
                  {phoneApp}
                </a>
              ) : (
                <Button
                  isBgTransparent
                  isIconOnly
                >
                  <Image url={phoneIcon} />
                </Button>
              )}

              {!isTablet && (
                <Button onClick={onFormChange}>
                  Забронировать
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
