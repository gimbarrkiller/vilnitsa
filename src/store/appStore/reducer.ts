import { AppStoreState } from 'types';
import { createReducer } from 'utils';
import { appStateHandlers } from './handlers';

export const appStoreInitialState: Readonly<AppStoreState> = {
  isOpenBurger: false,
  isOpenFormBurger: false,
};

export default createReducer(appStoreInitialState, appStateHandlers);
