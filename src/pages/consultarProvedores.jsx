import React, { useState, useEffect } from "react";

const ConsultaProveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setProveedores([
      { id: 1, nombre: "A", contacto: "a@a.com" },
      { id: 2, nombre: "B", contacto: "b@b.com" },
    ]);
  }, []);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const proveedoresFiltrados = proveedores.filter((proveedor) =>
    proveedor.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Consulta de Proveedores</h1>
      <input
        type="text"
        placeholder="Buscar proveedor..."
        value={busqueda}
        onChange={handleSearch}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <div>
        {proveedoresFiltrados.map((proveedor) => (
          <div key={proveedor.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{proveedor.nombre}</p>
            <p style={{ color: "gray" }}>{proveedor.contacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultaProveedores;