import { FullListState } from 'store/fullList/types';
import { AppStoreState } from 'store/appStore/types';

export type ReduxState = {
  fullList: FullListState,
  appStore: AppStoreState,
};
