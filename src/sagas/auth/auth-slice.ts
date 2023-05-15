const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state: any, action: any) => ({
      ...state,
    }),
    authRegister: (state: any, action: any) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state: any, action: any) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state: any, action: any) => ({
      ...state,
      ...action.payload,
    }),
    authRefreshToken: (state: any, action: any) => ({}),
    authLogOut: (state: any, action: any) => ({}),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogOut,
} = authSlice.actions;

export default authSlice.reducer;
