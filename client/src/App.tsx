import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider, DataProvider } from './datas/context';
import './style.css';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />
    },
  ])
  
export default function App() {

  return (
    <UserProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </UserProvider>
  );
}


