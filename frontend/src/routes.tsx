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
import EventosParaHoje from './features/EventosParaHoje';
import EventosPopulares from './features/EventosPopulares';
import PageNotFound from './components/PageNotFound';
import RouteProtection from './components/RouteProtection';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path = "/" 
                    element = { <Login/> }
                />

                <Route
                    path = "/registro"
                    element = {<Register />} 
                />

                <Route
                    path = "/home"
                    element = { 
                        <RouteProtection tipoUsuario = 'any'>
                            <Home/>
                        </RouteProtection>
                    }
                />

                <Route 
                    path = "/eventosPopulares" 
                    element = {
                        <RouteProtection tipoUsuario = 'any'>
                            <EventosPopulares/>
                        </RouteProtection>
                    } 
                />
                <Route 
                    path = "/eventosParaHoje" 
                    element = {
                        <RouteProtection tipoUsuario = 'any'>
                            <EventosParaHoje/>
                        </RouteProtection>
                    } 
                />
                <Route
                    path = "/evento/:id/compra" 
                    element = {
                        <RouteProtection tipoUsuario = 'cliente'>
                            <CompraIngresso/>
                        </RouteProtection>
                    }
                />

                <Route
                    path = "/evento/:id/" 
                    element = {
                        <RouteProtection tipoUsuario = 'any'>
                            <VisualizarEvento/>
                        </RouteProtection> 
                    }
                />

                <Route
                    path = "/evento/criar/" 
                    element = {
                        <RouteProtection tipoUsuario = 'organizador'>
                            <CriarEvento/>
                        </RouteProtection>
                    }
                />

                <Route
                    path = "/evento/:id/editar" 
                    element = {
                        <RouteProtection tipoUsuario = 'organizador'>
                            <EditarEvento/>
                        </RouteProtection>
                    }
                />


                <Route
                    path = "/meusIngressos" 
                    element = {
                        <RouteProtection tipoUsuario = 'cliente'>
                            <MeusIngressos/>
                        </RouteProtection>
                    }
                />
                
                <Route
                    path = "/meusEventos" 
                    element = {
                        <RouteProtection tipoUsuario = 'organizador'>
                            <MeusEventos/>
                        </RouteProtection> 
                    }
                />

                <Route 
                    path = "*"
                    element = { <PageNotFound/> } 
                />
            </Routes>
        </BrowserRouter>
    );
  };

export default Rotas;
