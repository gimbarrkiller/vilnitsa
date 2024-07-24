import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './styles.module.scss';

export const MainLayout = () => (
  <div>
    <Header />
    <div className={styles.layout_wrapper}>
      <Outlet />
    </div>
    <Footer />
  </div>
);
