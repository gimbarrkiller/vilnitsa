import { ReduxState, AppStoreState } from 'types';

export const appStateSelectors = {
  getProp: <T extends keyof AppStoreState>(propKey: T) => (
    state: ReduxState,
  ) => state.appStore[propKey],
  getState: (state: ReduxState) => state.appStore,
};
