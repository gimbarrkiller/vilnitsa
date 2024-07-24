import React, { memo } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type TextGoldProps = {
  text: string;
  className?: string;
};

export const TextGold = memo(({
  text,
  className,
}: TextGoldProps) => (
  <div className={cn(styles.text, className)}>
    {text}
  </div>
));
