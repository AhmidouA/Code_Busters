import LoginCard from './components/loginCard';
import { Route, Routes } from 'react-router-dom';
import { UserContext, DatasContext } from './datas/context';
import './style.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <DatasContext.Provider value={data}>
        <Routes>
            <Route path="/" element={<LoginCard />} />
        </Routes>
      </DatasContext.Provider>
    </UserContext.Provider>
  );
}

export default App;