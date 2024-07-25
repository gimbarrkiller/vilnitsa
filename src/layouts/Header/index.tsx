import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { PathName, phoneApp, ScreenWidth } from 'appConstants';
import {
  burgerIcon, burgerWhiteIcon,
  logoImage, phoneIcon,
} from 'assets/images';
import { useScreenWidth } from 'hooks';
import { appStateSelectors } from 'store/appStore/selectors';
import { appStateSetState } from 'store/appStore/actionCreators';

import {
  BurgerMenu, BurgerMenuForm,
  Button, Image,
} from 'components';

import styles from './styles.module.scss';

export const Header = memo(() => {
  const isOpenFormBurger = useSelector(appStateSelectors.getProp('isOpenFormBurger'));
  const dispatch = useDispatch();
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  const isMobile = useScreenWidth(ScreenWidth.mobile);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onBurgerChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onFormOpen = useCallback(() => {
    dispatch(appStateSetState({
      isOpenFormBurger: !isOpenFormBurger,
    }));
  }, [dispatch, isOpenFormBurger]);

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
        onFormChange={onFormOpen}
      />
      <BurgerMenuForm
        isOpen={isOpenFormBurger}
        onBurgerChange={onFormOpen}
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
                <Button onClick={onFormOpen}>
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
