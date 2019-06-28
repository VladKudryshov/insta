import { spawn } from 'redux-saga/effects';

import order from './order';
import catalog from "./catalog";
import basket from "./basket";

function* appSagas() {
  yield spawn(order);
  yield spawn(catalog);
  yield spawn(basket);
}

export default appSagas;
