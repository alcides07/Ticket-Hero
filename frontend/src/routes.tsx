import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './features/Register';
import Login from './features/Login';
import Home from './features/Home';
import CompraIngresso from './features/CompraIngresso';
import CriarEvento from './features/CriarEvento';
import EditarEvento from './features/EditarEvento';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/evento/:id/compra" element={<CompraIngresso/>} />
                <Route path="/evento/criar" element={<CriarEvento/>} />
                <Route path="/evento/:id/editar" element={<EditarEvento/>} />
            </Routes>
        </BrowserRouter>
    );
  };
  

export default Rotas;
