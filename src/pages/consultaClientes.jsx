import React, { useState, useEffect } from "react";

const ConsultaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setClientes([
      { id: 1, nombre: "Juan Pérez", correo: "juan@example.com" },
      { id: 2, nombre: "María López", correo: "maria@example.com" },
    ]);
  }, []);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-5 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold mb-3">Consulta de Clientes</h1>
    <input
      type="text"
      placeholder="Buscar cliente..."
      value={busqueda}
      onChange={handleSearch}
      className="w-full p-2 mb-3 border border-gray-300 rounded-md"
    />
    <div>
      {clientesFiltrados.map((cliente) => (
        <div key={cliente.id} className="border border-gray-300 p-3 mb-3 rounded-md shadow-sm">
          <p className="text-lg font-bold">{cliente.nombre}</p>
          <p className="text-gray-600">{cliente.correo}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ConsultaClientes;