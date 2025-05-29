import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConsultaClientes from './pages/consultaClientes';
import RegistroClientes from './pages/registroClientes';
import ConsultaProveedores from './pages/consultarProvedores';
import RegistroProveedores from './pages/registrarProvedores';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col bg-gray-900 text-white">
        {/* Navegación */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/" className="text-blue-400 hover:underline">Inicio</Link></li>
            <li><Link to="/buscarcliente" className="text-blue-400 hover:underline">Consultar Clientes</Link></li>
            <li><Link to="/registrocliente" className="text-blue-400 hover:underline">Registrar Clientes</Link></li>
            <li><Link to="/registroprovedor" className="text-blue-400 hover:underline">Registrar Proveedor</Link></li>
            <li><Link to="/buscarProvedor" className="text-blue-400 hover:underline">Consultar  Proveedor</Link></li>
          </ul>
        </nav>

        {/* Contenido Principal - Ocupa Todo el Espacio Disponible */}
        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 text-white">
                <h1 className="text-4xl font-bold mb-6">Tienda Virtual</h1>
                <div className="grid gap-4">
                  <Link to="/registrocliente" className="w-60 p-3   rounded text-center hover:bg-blue-600">
                    Registrar Cliente
                  </Link>
                  <Link to="/buscarcliente" className="w-60 p-3  rounded text-center hover:bg-blue-600">
                    Consultar Cliente
                  </Link>
                  <Link to="/registroprovedor" className="w-60 p-3 text-black rounded text-center hover:bg-blue-600">
                    Registro Provedor
                  </Link>
                  <Link to="/buscarProvedor" className="w-60 p-3 rounded text-center hover:bg-blue-600">
                    Consultar Provedor
                  </Link>
                </div>
              </div>
            } />
            <Route path="/buscarcliente" element={<ConsultaClientes />} />
            <Route path="/registrocliente" element={<RegistroClientes />} />
            <Route path="/registroprovedor" element={<RegistroProveedores />} />
            <Route path="/buscarProvedor" element={<ConsultaProveedores />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
