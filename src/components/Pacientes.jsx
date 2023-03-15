import React from 'react'

function Pacientes( {nombre , propietario , email , fecha , sintomas }) {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold text-gray-700 uppercase">
      nombre: <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      Propietario <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      Email <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      alta: <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase">
      sintomas: <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div>
      <button className='py-2 px-10 bg-indigo-600 text-white font-bold rounded-lg uppercase hover:bg-indigo-400 mr-1 my-2'>editar</button>
      <button className='py-2 px-10 bg-red-600 text-w font-bold rounded-lg uppercase hover:bg-red-400 text-white '>eliminar</button>
    </div>
  </div>
  )
}

export default Pacientes