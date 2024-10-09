import LoginCard from './components/loginCard';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginCard />}>
        </Route>
      </Routes>
  );
}

export default App;
