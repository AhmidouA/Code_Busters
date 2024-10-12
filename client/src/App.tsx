import LoginCard from './components/loginCard';
import { Route, Routes } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginCard />} />
    </Routes>
  );
}

export default App;
