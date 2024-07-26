import { Route, Routes } from 'react-router-dom';

import Logo_comp from './components/Logo_comp';
import User from './Routes/User';
import UserInfo from './Routes/UserInfo';

function App() {
  return (
    
    <div className='min-h-screen bg-gray-900'>
      <div className='container py-3 text-gray-100'>
        <Logo_comp />
        <Routes>
          <Route path='/' element = {<User/>}></Route>
          <Route path='/:name' element = {<UserInfo/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
