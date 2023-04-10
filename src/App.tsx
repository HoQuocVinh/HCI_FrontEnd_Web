import { lazy } from "react";
import LayoutDefault from "layouts/LayoutDefault";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes";
import { authRoutes, profileRouters } from "routes/routes";
import LayoutProfile from "layouts/LayoutProfile";

const LayoutAuth = lazy(() => import("layouts/LayoutAuth"));

function App() {
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
