import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { logoTextImage } from 'assets/images';
import { phoneApp, ScreenWidth } from 'appConstants';
import { useScreenWidth } from 'hooks';

import { Image, SocialLinks, TextGold } from 'components';

import { footerLinks } from './footerLinks';

import styles from './styles.module.scss';

const nowYear = new Date().getFullYear();

export const Footer = memo(() => {
  const isLaptop = useScreenWidth(ScreenWidth.laptop);
  const isTablet = useScreenWidth(ScreenWidth.tablet);

  const links = useMemo(() => (
    <div className={styles.footer_links}>
      {footerLinks.map(({ title, pathName }) => (
        <Link
          key={title}
          to={pathName}
          className={styles.footer_links_link}
        >
          {title}
        </Link>
      ))}
    </div>
  ), []);

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_title}>
          Хотите незабываемых впечатлений?
        </div>
        <TextGold
          text="Забронируйте отдых прямо сейчас!"
          className={styles.footer_subtitle}
        />
        <div className={styles.footer_phone}>
          <a href={`tel:${phoneApp}`}>
            {phoneApp}
          </a>
        </div>
        <div className={styles.footer_text_info}>
          Премиальный отдых в кругу друзей, семьи или коллег –
          {!isTablet ? <br /> : ' '}
          мы знаем, чем вас удивить!
        </div>

        {isLaptop && links}
        <div className={styles.footer_bottom}>
          <Image
            url={logoTextImage}
            className={styles.footer_logo}
          />
          {!isLaptop && links}
          <SocialLinks />
        </div>

        <div className={styles.footer_line} />

        <div className={cn(styles.footer_bottom, styles.bot)}>
          <div>
            {nowYear}
            {' '}
            © Вольница
          </div>
          <div>
            Политика конфиденциальности
          </div>
        </div>
      </div>

    </div>
  );
});
