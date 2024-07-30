import React, { FC } from 'react';
import {
  Routes as RoutesDom,
  Route,
} from 'react-router-dom';

import { PathName } from 'appConstants';
import { useScrollToTop } from 'hooks';

import { HomePage, ShaleItemPage, ShalePage } from 'pages';
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
      </Route>
    </RoutesDom>
  );
};

export { Routes };
