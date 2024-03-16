import { Routes, Route, redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />)}

        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  );
};
