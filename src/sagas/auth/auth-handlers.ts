import { AnyAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import {
  requestAuthLogin,
  requestAuthLogout,
  requestAuthRegister,
  requestRefreshToken,
} from "./auth-requests";
import { authRefreshToken, authUpdateUser } from "./auth-slice";
import { useNavigate } from "react-router";
import { navigateWithoutReload } from "utils/handler";

const { default: jwt_decode } = require("jwt-decode");

function* handleAuthRegister(action: AnyAction): Generator<any, void, any> {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log("TCL: response", response);
    const { data } = response;
    if (data.result) {
      toast.success("Please active account in email", { autoClose: 500 });
      setTimeout(() => {
        document.location = "signin";
      }, 1500);
    } else toast.warning(data.message, { autoClose: 500 });
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

function* handleAuthRefreshToken(): Generator<any, void, any> {
  const response = yield call(requestRefreshToken);
  const { result } = response.data;
  if (result.access && result.refresh) {
    const decode = jwt_decode(result.access);
    console.log("TCL: decode", decode);
    yield put(
      authUpdateUser({
        user: decode,
        accessToken: result.access,
      })
    );
  }
}

export {
  handleAuthRegister,
  handleAuthLogin,
  handleAuthLogOut,
  handleAuthRefreshToken,
};
