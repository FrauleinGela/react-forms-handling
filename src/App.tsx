import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Header } from './common/layouts/Header/Header';
import { FormUponSubmit } from './FormUponSubmit/FormUponSubmit';

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
        element: <h1>Handling Forms in React</h1>,
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
