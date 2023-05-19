import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes } from "routes";
import { authRoutes, privateRoutes, profileRouters } from "routes/routes";
import { authUpdateUser } from "sagas/auth/auth-slice";
import { getToken } from "utils/auth";
const { default: jwt_decode } = require("jwt-decode");

const LayoutDefault = lazy(() => import("layouts/LayoutDefault"));
const LayoutProfile = lazy(() => import("layouts/LayoutProfile"));
const LayoutAuth = lazy(() => import("layouts/LayoutAuth"));

function App() {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const { access_token } = getToken();

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  // console.log(user);

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
      </Routes>
    </Suspense>
  );
}

export default App;
