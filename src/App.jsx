import { useState } from 'react'
import Formulario from './components/Formulario'
import FormFormik from './components/FormularioFormik/FormFormik'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  const [ paciente , setPaciente] = useState([])

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      
      <div className='mt-12 md:flex'>
      {/* <FormFormik/> */}
      <Formulario 
        paciente ={paciente}
        setPaciente = {setPaciente}
      />
      <ListadoPacientes  
          pacientes={paciente}
      />

      </div>

    </div>
  )
}

export default App
