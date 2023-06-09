import { takeLatest } from "redux-saga/effects";
import {
  authLogin,
  authLogOut,
  authRefreshToken,
  authRegister,
} from "./auth-slice";

import {
  handleAuthLogin,
  handleAuthRegister,
  handleAuthLogOut,
  handleAuthRefreshToken,
} from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLogOut.type, handleAuthLogOut);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
}
