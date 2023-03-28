import LayoutDefault from "layouts/LayoutDefault";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes";
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
      </Routes>
    </Suspense>
  );
}

export default App;
