import LayoutDefault from "layouts/LayoutDefault";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "routes";
function App() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        {publicRoutes.map((route: any, index: number) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
