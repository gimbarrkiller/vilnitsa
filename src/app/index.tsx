import React, { FC } from 'react';
import { Routes } from 'containers';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export { App };
