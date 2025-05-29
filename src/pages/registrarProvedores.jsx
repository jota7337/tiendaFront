import React, { useState, useEffect } from "react";

const RegistroProveedores = () => {
  const [form, setForm] = useState({ nombre: "", contacto: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("Proveedor registrado exitosamente");
    setForm({ nombre: "", contacto: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Registro de Proveedor</h1>
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Contacto</label>
            <input
              type="email"
              name="contacto"
              value={form.contacto}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none" }}>Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default RegistroProveedores;