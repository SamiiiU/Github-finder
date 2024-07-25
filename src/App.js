import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logo_comp from './components/Logo_comp';
import User from './Routes/User';

function App() {
  return (
    
    <div className='min-h-screen bg-black'>
      <div className='container py-3 text-gray-100'>
        <Logo_comp />
        <Routes>
          <Route path='/' element = {<User/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
