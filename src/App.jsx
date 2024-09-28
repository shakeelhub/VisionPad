import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Draw from './pages/Draw';


const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/whiteboard' element={<Draw />} />
        </Routes>
    </>
  );
};

export default App;
