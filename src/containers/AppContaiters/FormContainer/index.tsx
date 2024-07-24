import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import * as yup from 'yup';

import { arrowLeftIcon } from 'assets/images';

import { Button, Image } from 'components';

import styles from './styles.module.scss';

const dateNow = new Date().toISOString().split('T')[0];

const validationSchema = yup.object({
  name: yup.string().required('Обязательное поле'),
  phone: yup
    .string()
    .required('Телефон обязателен'),
  countPerson: yup
    .number()
    .required('Обязательное поле')
    .min(1, 'Минимум 1'),

  date: yup.string().required('Обязательное поле'),
  date2: yup.string().required('Обязательное поле'),
  checked: yup.boolean().required('Условия должны быть приняты'),
});

const initialValues = {
  name: '',
  phone: '',
  countPerson: '',
  date: '',
  date2: '',
  checked: false,
};

interface IFormContainer {
  onIsSubmitting?: () => void;
}

export const FormContainer:FC<IFormContainer> = ({ onIsSubmitting }) => (
  <div>
    <h2 className={styles.form_title}>Заполните форму</h2>
    <div className={styles.form_subtitle}>
      Укажите контактные данные, количество гостей и желаемые даты
    </div>
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={() => {
        if (onIsSubmitting) {
          onIsSubmitting();
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.form_half}>
            <div className={styles.input_container}>
              <input
                name="name"
                placeholder="Имя"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className={styles.error}>
                  {errors.name}
                </div>
              )}
            </div>
            <div className={styles.input_container}>
              <input
                name="phone"
                placeholder="Номер телефона"
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone && touched.phone && (
                <div className={styles.error}>
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          <div className={styles.form_half}>
            <div className={styles.input_container}>
              <input
                name="countPerson"
                placeholder="Количество гостей"
                onChange={handleChange}
                value={values.countPerson}
              />
              {errors.countPerson && touched.countPerson && (
                <div className={styles.error}>
                  {errors.countPerson}
                </div>
              )}
            </div>
            <div className={styles.input_container}>
              <input
                min={dateNow}
                max={values.date2}
                type="date"
                name="date"
                placeholder="Заезд"
                onChange={handleChange}
                value={values.date}
              />
              {errors.date && touched.date && (
                <div className={styles.error}>
                  {errors.date}
                </div>
              )}
            </div>
            <div className={styles.input_container}>
              <input
                min={values.date || dateNow}
                type="date"
                name="date2"
                placeholder="Выезд"
                onChange={handleChange}
                value={values.date2}
              />
              {errors.date2 && touched.date2 && (
                <div className={styles.error}>
                  {errors.date2}
                </div>
              )}
            </div>
          </div>

          <div className={styles.input_container}>
            <label
              className={styles.checkbox_container}
              htmlFor="checkbox"
            >
              <Field
                id="checkbox"
                type="checkbox"
                name="checked"
                label="Я принимаю условия обработки персональных данных"
              />
              <div className={styles.label}>
                Я принимаю условия обработки персональных данных
              </div>
            </label>
            {errors.checked && touched.checked && (
              <div className={styles.error}>
                {errors.checked}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className={styles.form_btn}
          >
            <Image url={arrowLeftIcon} />
          </Button>
        </form>
      )}
    </Formik>
  </div>
);
