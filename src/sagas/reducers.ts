import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import modalReducer from "./modal/modal-slice";

export const reducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});
