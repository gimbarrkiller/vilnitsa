import { AppStoreState } from 'types';
import { AppStateActionType } from './actionsTypes';

export const appStateSetState = (payload: Partial<AppStoreState>) => ({
  type: AppStateActionType.SetState,
  payload,
});
