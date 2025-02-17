import React, { FC } from 'react';
import {
  Routes as RoutesDom,
  Route,
} from 'react-router-dom';

import { PathName } from 'appConstants';
import { useScrollToTop } from 'hooks';

import {
  HomePage, ServicesItemPage, ServicesPage,
  ShaleItemPage, ShalePage,
} from 'pages';
import { MainLayout } from 'layouts';

const Routes: FC = () => {
  useScrollToTop();
  return (
    <RoutesDom>
      <Route
        path={PathName.Home}
        element={<MainLayout />}
      >
        <Route
          path={PathName.Home}
          element={<HomePage />}
        />

        <Route
          path={PathName.Shale}
          element={<ShalePage />}
        />
        <Route
          path={PathName.Shale}
          element={<ShaleItemPage />}
        >
          <Route
            path={PathName.ItemId}
            element={<ShaleItemPage />}
          />
        </Route>

        <Route
          path={PathName.Services}
          element={<ServicesPage />}
        />
        <Route
          path={PathName.Services}
          element={<ServicesItemPage />}
        >
          <Route
            path={PathName.ItemId}
            element={<ServicesItemPage />}
          />
        </Route>

        <Route
          path={PathName.Activity}
          element={<ServicesPage />}
        />
        <Route
          path={PathName.Activity}
          element={<ServicesItemPage />}
        >
          <Route
            path={PathName.ItemId}
            element={<ServicesItemPage />}
          />
        </Route>

      </Route>
    </RoutesDom>
  );
};

export { Routes };
