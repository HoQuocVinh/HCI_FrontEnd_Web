import Cookies from "js-cookie";
const accessTokenKey = "palmo_access_token";
const refreshTokenKey = "palmo_refresh_token";
const objCookies = {
  // expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

// export const saveToken = (access_token: string, refresh_token: string) => {
//   const accessTokenExpireTime = 30; // 30 seconds
//   const refreshTokenExpireTime = 60; // 60 seconds

//   if (access_token && refresh_token) {
//     const accessTokenOptions = {
//       expires: new Date(Date.now() + accessTokenExpireTime * 1000), // Convert to milliseconds
//       domain: process.env.COOKIE_DOMAIN,
//     };
//     const refreshTokenOptions = {
//       expires: new Date(Date.now() + refreshTokenExpireTime * 1000), // Convert to milliseconds
//       domain: process.env.COOKIE_DOMAIN,
//     };

//     Cookies.set(accessTokenKey, access_token, accessTokenOptions);
//     Cookies.set(refreshTokenKey, refresh_token, refreshTokenOptions);
//   } else {
//     Cookies.remove(accessTokenKey, {
//       ...objCookies,
//       path: "/",
//       domain: process.env.COOKIE_DOMAIN,
//     });
//     Cookies.remove(refreshTokenKey, {
//       ...objCookies,
//       path: "/",
//       domain: process.env.COOKIE_DOMAIN,
//     });
//   }
// };

export const saveToken = (access_token: string, refresh_token: string) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};

export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
