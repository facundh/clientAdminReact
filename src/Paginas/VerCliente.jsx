import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import Spinner from "../components/Spinner";

const VerCliente = () => {
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
    }, 1000);
  }, []);

  return (
    cargando ? <Spinner /> :
      Object.keys(cliente).length === 0 ? 
        <Alerta>No Hay Resultados</Alerta>
   : (
    <div className="d-flex justify-center align-middle border-solid border-2 border-sky-500 w-auto p-5 rounded-md">
      
        
       
        
         <h1 className="uppercase  text-sky-600 font-bold text-center mt-4 text-3xl underline">
            {cliente.nombre}
          </h1>
          <p className="text-center mt-5 font-bold uppercase">
            <span className=" text-gray-500">Empresa</span> {cliente.empresa}
          </p>
          <p className="text-center mt-5 font-bold uppercase">
            <span className=" text-gray-500">Email</span> {cliente.email}
          </p>
          <p className="text-center mt-5 font-bold uppercase">
            <span className=" text-gray-500">Telefono: </span>{" "}
            {cliente.telefono}
          </p>
          {cliente.notas && (
            <p className="text-center mt-5 font-bold uppercase">
              <span className=" text-gray-500">Notas: </span> {cliente.notas}
            </p>
          )}{" "}
        
      
    </div>
  ));
};

export default VerCliente;
