import React, { useState } from "react";

const RegistroClientes = () => {
  const [form, setForm] = useState({ nombre: "", correo: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("Cliente registrado exitosamente");
    setForm({ nombre: "", correo: "" });
  };

  return (
          <div className="p-5 max-w-md mx-auto">
            <div className="border border-gray-300 p-5 rounded-md shadow-md">
              <h1 className="text-2xl font-bold mb-3">Registro de Cliente</h1>
              {mensaje && <p className="text-green-600">{mensaje}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block font-medium">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-3">
                  <label className="block font-medium">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                >
                  Registrar
                </button>
              </form>
            </div>
          </div>
        );
      }
      


export default RegistroClientes;