import React, {
  FC,
  memo,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { closeIcon, logoTextImage } from 'assets/images';
import { useScreenWidth } from 'hooks';
import { ScreenWidth } from 'appConstants';

import { Button } from '../Button';
import { Image } from '../Image';
import { SocialLinks } from '../SocialLinks';
import { links } from './constants';

import styles from './styles.module.scss';

interface IBurgerMenu {
  onBurgerChange: () => void;
  onFormChange: () => void;
  isOpen: boolean;
}

export const BurgerMenu:FC<IBurgerMenu> = memo(({
  onBurgerChange,
  isOpen,
  onFormChange,
}) => {
  const isTablet = useScreenWidth(ScreenWidth.tablet);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={cn(styles.burger, {
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.burger_container}>
        <div className={styles.burger_header}>
          <Button
            isBgTransparent
            isIconOnly={isTablet}
            onClick={onBurgerChange}
          >
            <Image url={closeIcon} />
            {!isTablet && 'Закрыть'}
          </Button>
          {isTablet && (
            <Button onClick={onFormChange}>
              Забронировать
            </Button>
          )}
        </div>

        <div className={styles.burger_navigation}>
          {links.map(({ pathName, title }) => (
            <Link
              key={title}
              to={pathName}
              onClick={onBurgerChange}
              className={styles.burger_navigation_link}
            >
              <h2 className={styles.burger_navigation_link_text}>
                {title}
              </h2>
            </Link>
          ))}
        </div>
        <div className={styles.burger_footer}>
          <Image
            url={logoTextImage}
            className={styles.burger_logo}
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
});
