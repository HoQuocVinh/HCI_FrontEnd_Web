import axios from "api/axios";
import { authUpdateUser } from "sagas/auth/auth-slice";
import { getToken, saveToken } from "utils/auth";
const { default: jwt_decode } = require("jwt-decode");

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    if (!refresh_token) return null;
    const user = jwt_decode(refresh_token);
    // const response = await axios.post(`token/${refresh_token}`, {
    //   "Content-Type": "Application/json",
    //   refreshToken: refresh_token,
    // });
    const dataRequest: any = {
      refresh: refresh_token,
      user: user.id,
    };
    const response = await axios.get("refresh-toke", dataRequest);
    if (!response.data) return null;
    saveToken(response.data.accessToken, response.data.refreshToken);
    authUpdateUser((prev: any) => ({
      ...prev,
      accessToken: response.data.accessToken,
    }));
    return response.data.accessToken || "";
  }
  return refresh;
}
