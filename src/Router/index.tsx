import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from 'Pages/Homepage';
import { Watch } from 'Pages/Watch';
import Results from 'Pages/Results';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },

  {
    path: 'watch',
    element: <Watch />,
  },

  {
    path: 'results',
    element: <Results />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export { Routes };
