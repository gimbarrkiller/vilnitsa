/* eslint-disable no-console */
import {
  takeLatest,
} from 'redux-saga/effects';

import { FullListActionType } from './actionsTypes';

export function* getFullListSaga() {
  try {
    yield console.log(123);
  } catch (exception) {
    console.log(exception);
  }
}

export const FullListEffects = [
  takeLatest(FullListActionType.GET_FULL_LIST, getFullListSaga),
];
