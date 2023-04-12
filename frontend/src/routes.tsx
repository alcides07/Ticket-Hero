import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './features/Register';
import Login from './features/Login';
import Home from './features/Home';
import CompraIngresso from './features/CompraIngresso';
import CriarEvento from './features/CriarEvento';
import EditarEvento from './features/EditarEvento';
import VisualizarEvento from './features/VisualizarEvento';
import MeusIngressos from './features/MeusIngressos';
import MeusEventos from './features/MeusEventos';
import EventosPopulares from './features/EventosPopulares';
import PageNotFound from './components/PageNotFound';
import { withProtectedRoute } from './components/RouteProtection';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={withProtectedRoute({ tipoUsuario: 'any', componente: Login })} />
                <Route path="/home" element={withProtectedRoute({ tipoUsuario: 'any', componente: Home })} />
                <Route path="/evento/:id/compra" element={withProtectedRoute({ tipoUsuario: 'cliente', componente: CompraIngresso })} />
                <Route path="/eventosPopulares" element={withProtectedRoute({ tipoUsuario: 'duo', componente: EventosPopulares })} />
                
                {/* <Route path="/eventosPopulares" element={<EventosPopulares/>} /> */}
                {/* <Route path="/evento/:id/compra" element={<CompraIngresso/>} /> */}
                <Route path="/registro" element={<Register />} />
                <Route path="/evento/:id/" element={<VisualizarEvento/>} />
                <Route path="/evento/criar" element={<CriarEvento/>} />
                <Route path="/evento/:id/editar" element={<EditarEvento/>} />
                <Route path="/meusIngressos" element={<MeusIngressos/>} />
                <Route path="/meusEventos" element={<MeusEventos/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    );
  };

export default Rotas;
