import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Header } from './common/layouts/Header/Header';
import { FormUponSubmit } from './FormUponSubmit/FormUponSubmit';
import { FormUponFieldChange } from './FormUponFieldChange/FormUponFieldChange';

const ComponentRoute = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentRoute />,
    children: [
      {
        path: '/',
        element: <FormUponSubmit />,
      },
      {
        path: '/upon-field-change',
        element: <FormUponFieldChange />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
