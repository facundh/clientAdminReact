import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Formulario from "../components/Formulario";
import Spinner from "../components/Spinner";


const EditarCliente = () => {
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(!cargando);
    const obtenerCliente = async () => {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);

      setCliente(resultado);
      setCargando(false);
    };

     setTimeout(() => {
       
       obtenerCliente();
     }, 300);
   
    
  }, []);
  return cargando ? (
    <Spinner />
  ) : (
    <>
      
      <h1 className="uppercase  text-sky-600 font-bold text-center mt-4 text-3xl">
        Edita tu cliente
      </h1>

      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p>Id no valido</p>
      )}
    </>
  )
  ;
};

export default EditarCliente;
