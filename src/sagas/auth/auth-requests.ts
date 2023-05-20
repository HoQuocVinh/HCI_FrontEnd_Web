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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { access_token } = getToken();
  if (!access_token) return;
  const user = jwt_decode(access_token);
  return axios.post(
    "auth/log-out",
    { id: user.id },
    {
      headers: {
        "Content-Type": "Application/json",
        Authorization: ` Bearer ${access_token}`,
      },
    }
  );
};

const requestRefreshToken = () => {
  const { access_token } = getToken();
  return axios.get("auth/refresh-token", {
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export {
  requestAuthRegister,
  requestAuthLogin,
  requestAuthLogout,
  requestRefreshToken,
};
