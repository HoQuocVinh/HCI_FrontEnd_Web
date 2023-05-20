import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes } from "routes";
import { authRoutes, privateRoutes, profileRouters } from "routes/routes";
import { authUpdateUser } from "sagas/auth/auth-slice";
import { getToken } from "utils/auth";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";

const { default: jwt_decode } = require("jwt-decode");

let userID = localStorage.getItem("userId");

if (!userID) {
  localStorage.setItem("userId", uuidv4());
}

export const socket = io("http://localhost:3000", {
  query: {
    id: userID,
  },
});

const LayoutDefault = lazy(() => import("layouts/LayoutDefault"));
const LayoutProfile = lazy(() => import("layouts/LayoutProfile"));
const LayoutAuth = lazy(() => import("layouts/LayoutAuth"));
const Activepage = lazy(() => import("pages/ActivePage"));

function App() {
  const { access_token } = getToken();
  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (access_token) {
      const decode = jwt_decode(access_token);
      dispatch(
        authUpdateUser({
          user: decode,
          accessToken: access_token,
        })
      );
    }
  }, [access_token]);

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutDefault />}>
          {publicRoutes.map((route: any, index: number) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route element={<LayoutAuth />}>
          {authRoutes.map((route, index: number) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route element={<LayoutDefault />}>
          {privateRoutes.map((route, index: number) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route path="/profile" element={<LayoutProfile />}>
          {profileRouters.map((route, index: number) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route path="/auth/confirm-email" element={<Activepage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
