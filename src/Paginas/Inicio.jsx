import React, {useState ,useEffect} from 'react';
import Cliente from '../components/Cliente';

const Inicio = () => {
  const [ clientes, setClientes ] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      
      try {
        const url = 'http://localhost:4000/clientes';
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado)
        
      } catch (error) {
        console.log(error);
      }

    }

    obtenerClientesAPI();
  },[clientes])
  return (
    <>
       <h1 className='uppercase  text-sky-600 font-bold text-center mt-4 text-3xl'>Lista de clientes</h1>
    <div className='w-full'>
        <table className='w-full  mt-5 table-auto shadow bg-white'>
            <thead className='text-sky-500'>
              <tr>
                <th className='p-2'>Nombre</th>
                <th className='p-2'>Contacto</th>
                <th className='p-2'>Empresa</th>
                <th className='p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {
                  clientes.map(cliente => (
                    <Cliente 
                      key={cliente.id}
                      cliente={cliente}
                    />
                  ))
                }
            </tbody>
      </table>
    </div>
    
    </>
  )
}

export default Inicio