import { Route, Routes } from 'react-router-dom';

import { RouteConfigTypes } from '../types';
import { Home, Todos } from '../pages';

const routes: RouteConfigTypes[] = [
  { path: '/', element: <Home /> },
  { path: '/todos', element: <Todos /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
