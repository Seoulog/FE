import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import router from './utils/router';

const App = () => {
  const routeObject = createBrowserRouter(router);

  return <RouterProvider router={routeObject} />;
};

export default App;
