import React, { memo } from 'react';

import { Button } from '../Button';
import { socialLinks } from './constants';

import styles from './styles.module.scss';
import { Image } from '../Image';

export const SocialLinks = memo(() => (
  <div className={styles.social_links}>
    {socialLinks.map(({ pathName, icon }) => (
      <Button
        key={icon}
        isBgTransparent
        isIconOnly
        className={styles.social_links_btn}
      >
        <a
          href={pathName}
          target="_blank"
          rel="noreferrer"
        >
          <Image url={icon} />
        </a>
      </Button>
    ))}
  </div>
));
