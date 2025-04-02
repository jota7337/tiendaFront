import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConsultaClientes from './pages/consultaClientes'
import RegistroClientes from './pages/registroClientes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <ConsultaClientes></ConsultaClientes>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
