import { spawn } from 'redux-saga/effects';

import order from './order';
import catalog from "./catalog";
import basket from "./basket";
import address from "./address";
import blog from "./blog";
import user from "./user";
import data from "./data";

function* appSagas() {
  yield spawn(order);
  // yield spawn(catalog);
  yield spawn(basket);
  yield spawn(address);
  yield spawn(blog);
  yield spawn(user);
  yield spawn(data);
}

export default appSagas;
