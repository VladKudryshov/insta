import {spawn} from 'redux-saga/effects';

import order from './order';
import basket from "./basket";
import address from "./address";
import blog from "./blog";
import user from "./user";
import data from "./data";
import userManagmentSaga from "./userManagmentSaga";

function* appSagas() {
  yield spawn(order);
  yield spawn(basket);
  yield spawn(address);
  yield spawn(blog);
  yield spawn(user);
  yield spawn(data);
  yield spawn(userManagmentSaga);
}

export default appSagas;
