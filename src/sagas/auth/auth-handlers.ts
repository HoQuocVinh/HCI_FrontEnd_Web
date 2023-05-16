import { AnyAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import {
  requestAuthLogin,
  requestAuthLogout,
  requestAuthRegister,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

const { default: jwt_decode } = require("jwt-decode");

function* handleAuthRegister(action: AnyAction): Generator<any, void, any> {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log("TCL: response", response);
    response.status === 200 &&
      toast.warning(response.data.message, { autoClose: 1000 });
    response.status === 201 &&
      toast.success(response.data.message, { autoClose: 1000 });
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin({ payload }: any): Generator<any, void, any> {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log("TCL: response", response);
    const { result } = response.data;
    if (result.access && result.refresh) {
      saveToken(result.access, result.refresh);
      const decode = jwt_decode(result.access);
      console.log("TCL: decode", decode);
      yield put(
        authUpdateUser({
          user: decode,
          accessToken: result.access,
        })
      );
      toast.success("Login success!", {
        autoClose: 500,
      });
    }
  } catch (error: any) {
    const { data } = error.response;
    data && toast.error(data.message, { autoClose: 500 });
  }
}

function* handleAuthLogOut(payload: string): Generator<any, void, any> {
  const response = yield call(requestAuthLogout);
  const { data } = response;
  if (data.result) {
    toast.success("Logout success!", { autoClose: 500 });
    logOut();
  }
}

export { handleAuthRegister, handleAuthLogin, handleAuthLogOut };
