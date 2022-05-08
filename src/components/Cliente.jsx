import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cliente = ({cliente, handleDeleteUser}) => {
    const {nombre, empresa, email, id, telefono, notas} = cliente;

    const navigate = useNavigate();
  return (
    <tr className='border-b hover:bg-slate-400 cursor-pointer text-center'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className='uppercase text-gray-700 font-bold'>Email: </span>{email}</p>
            <p><span className='uppercase text-gray-700 font-bold'>Telefono: </span>{telefono}</p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>

        <button 
        type='button' 
        className='block bg-green-400 p-2 rounded-md w-full mb-2 font-bold uppercase text-xs' 
        onClick={() => navigate(`/clientes/${id}`)}>
                Ver mas
            </button>

            <button type='button' className='block bg-blue-400 p-2 rounded-md w-full mb-2 font-bold uppercase text-xs' 
            onClick={() => navigate(`/clientes/editar/${id}`)}>
                Editar
            </button>
            
            <button type='button' className='block bg-red-400 p-2 rounded-md w-full font-bold uppercase text-xs' 
            onClick={()=> handleDeleteUser(id)}>
                Eliminar
            </button>
        </td>
        
    </tr>
  )
}

export default Cliente