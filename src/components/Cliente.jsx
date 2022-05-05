import React from 'react'

const Cliente = ({cliente}) => {
    const {nombre, empresa, email, id, telefono, notas} = cliente
  return (
    <tr className='border-b hover:bg-slate-400 cursor-pointer'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className='uppercase text-gray-700 font-bold'>Email: </span>{email}</p>
            <p><span className='uppercase text-gray-700 font-bold'>Telefono: </span>{telefono}</p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>

        <button type='button' className='block bg-green-400 p-2 rounded-md w-full mb-2 font-bold uppercase text-xs'>
                Ver mas
            </button>

            <button type='button' className='block bg-blue-400 p-2 rounded-md w-full mb-2 font-bold uppercase text-xs'>
                Editar
            </button>
            
            <button type='button' className='block bg-red-400 p-2 rounded-md w-full font-bold uppercase text-xs'>
                Eliminar
            </button>
        </td>
        
    </tr>
  )
}

export default Cliente