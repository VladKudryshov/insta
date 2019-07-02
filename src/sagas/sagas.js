import { spawn } from 'redux-saga/effects';

import order from './order';
import catalog from "./catalog";
import basket from "./basket";
import address from "./address";

function* appSagas() {
  yield spawn(order);
  yield spawn(catalog);
  yield spawn(basket);
  yield spawn(address);
}

export default appSagas;
