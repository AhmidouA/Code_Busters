import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserContext, DatasContext } from './datas/context';
import './style.css';
import { useState } from 'react';
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
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <DatasContext.Provider value={data}>
        <RouterProvider router={router} />
      </DatasContext.Provider>
    </UserContext.Provider>
  );
}


