import LoginCard from './components/loginCard';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <h1>Hello world</h1>
        <LoginCard />
    </div>
  );
}

export default App;
