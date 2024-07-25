import React, {
  FC,
  memo, useCallback,
  useEffect, useState,
} from 'react';
import cn from 'classnames';

import { closeGoldIcon } from 'assets/images';

import { FormContainer } from 'containers';

import { Button } from '../Button';
import { Image } from '../Image';

import styles from './styles.module.scss';
import { TextGold } from '../TextGold';

interface IBurgerMenu {
  onBurgerChange: () => void;
  isOpen: boolean;
}

export const BurgerMenuForm:FC<IBurgerMenu> = memo(({ onBurgerChange, isOpen }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 7000);
    }
  }, [isSubmitting]);

  const onIsSubmitting = useCallback(() => {
    setIsSubmitting(!isSubmitting);
  }, [isSubmitting]);

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
        [styles.submitting]: isSubmitting,
      })}
    >
      <div
        className={cn(styles.burger_container, {
          [styles.submitting]: isSubmitting,
        })}
      >
        <div className={styles.burger_header}>
          <Button
            isBgTransparent
            isIconOnly
            onClick={onBurgerChange}
            className={styles.form_close}
          >
            <Image url={closeGoldIcon} />
          </Button>
        </div>
        <div className={styles.burger_content}>
          {!isSubmitting ? (
            <FormContainer
              onIsSubmitting={onIsSubmitting}
            />
          ) : (
            <div>
              <div className={styles.form_submit_title}>
                Спасибо
              </div>
              <TextGold
                text="За заявку"
                className={styles.form_submit_title_gold}
              />
              <div className={styles.form_submit_subtitle}>
                В ближайшее время мы с вами свяжемся
              </div>
            </div>
          )}
        </div>
        <div />
      </div>
    </div>
  );
});
