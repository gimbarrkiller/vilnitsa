import React, { FC, memo } from 'react';

import { FormContainer } from 'containers';

import styles from './styles.module.scss';

interface IFormContainer {
  onIsSubmitting?: () => void;
}

export const FormWhiteContainer:FC<IFormContainer> = memo(() => (
  <div className={styles.white_container}>
    <div className={styles.white_content}>
      <FormContainer
        title="Хотите отдохнуть в максимальном единении с природой?"
        subtitle="Оставьте заявку, мы всё организуем!"
      />
    </div>
  </div>
));
