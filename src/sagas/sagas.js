import { spawn } from 'redux-saga/effects';

import order from './order';

function* appSagas() {
  yield spawn(order);
}

export default appSagas;
