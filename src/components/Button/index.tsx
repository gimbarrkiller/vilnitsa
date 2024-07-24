import React, { memo } from 'react';
import cx from 'classnames';

import { Loader } from 'components';

import { ButtonProps } from './types';

import styles from './styles.module.scss';

export const Button = memo((
  {
    isFullWidth,
    onClick,
    className,
    children,
    disabled,
    isLoading,
    isBgTransparent,
    isIconOnly,
    type = 'button',
  }: ButtonProps,
) => (
  <button
    type={type}
    className={cx(
      className,
      styles.button,
      {
        [styles.full_width]: isFullWidth,
        [styles.disabled]: disabled,
        [styles.bg_transparent]: isBgTransparent,
        [styles.icon_only]: isIconOnly,
      },
    )}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    <div className={cx(
      styles.button_content,
      { [styles.children_while_loading]: isLoading },
    )}
    >
      {children}
    </div>
    { isLoading && <Loader className={styles.loader} /> }
  </button>
));
