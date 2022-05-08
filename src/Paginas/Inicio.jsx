import React, { useState, useEffect } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = "http://localhost:4000/clientes";

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerClientesAPI();
  }, []);

  const handleDeleteUser = async (id) => {
    const confirmar = confirm("¿Seguro quieres eliminar este cliente?");
    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });
        await respuesta.json();

        const clientesFiltrados = clientes.filter(
          (cliente) => cliente.id !== id
        );
        setClientes(clientesFiltrados);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <h1 className="uppercase  text-sky-600 font-bold text-center mt-4 text-3xl">
        Lista de clientes
      </h1>

      <table className="w-full  mt-5 table-auto shadow bg-white">
        <thead className="text-sky-500">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
