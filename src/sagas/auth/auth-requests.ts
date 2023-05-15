import axios from "api/axios";
import { getToken } from "utils/auth";

const { default: jwt_decode } = require("jwt-decode");
const requestAuthRegister = (data: { email: string; password: string }) => {
  return axios.post("auth/register", data);
};

const requestAuthLogin = (data: object) => {
  console.log(data);
  return axios.post("auth/log-in", data);
};

const requestAuthLogout = () => {
  const { access_token } = getToken();
  if (!access_token) return;
  const user = jwt_decode(access_token);
  return axios.post("auth/log-out", { id: user.id });
};

export { requestAuthRegister, requestAuthLogin, requestAuthLogout };

// export const requestAuthFetchMe = (token: string) => {
//   if (!token) return;
//   const decode = jwt_decode(token);
//   return axios.get(`user/${decode.sub}`, {
//     headers: {
//       "Content-Type": "Application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const requestAuthRefreshToken = (token: string) => {
//   if (!token) return;
//   return axios.post(`token/${token}`, {
//     headers: {
//       "Content-Type": "Application/json",
//       // Authorization: `Bearer ${token}`,
//     },
//   });
// };
