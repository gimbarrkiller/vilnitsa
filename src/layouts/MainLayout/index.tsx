import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './styles.module.scss';

export const MainLayout = () => {
  const layoutDiv = document.querySelector('#layout');
  const { pathname } = useLocation();

  useEffect(() => {
    if (layoutDiv && pathname) {
      layoutDiv.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [layoutDiv, pathname]);

  return (
    <div>
      <Header />
      <div className={styles.layout_wrapper}>
        <div id="layout" />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
