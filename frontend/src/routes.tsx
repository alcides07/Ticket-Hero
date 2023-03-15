import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './features/Register';
import Login from './features/Login';
import Home from './features/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
  };
  

export default Rotas;
