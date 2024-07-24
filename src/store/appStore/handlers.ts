import { ActionFn, AppStoreState } from 'types';
import { AppStateActionType } from './actionsTypes';
import { appStateSetState } from './actionCreators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandlerFn<F extends (...args: any[]) => any> = ActionFn<AppStoreState, ReturnType<F>>;

const setState: HandlerFn<typeof appStateSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const appStateHandlers = {
  [AppStateActionType.SetState]: setState,
};
