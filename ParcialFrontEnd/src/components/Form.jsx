import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [usuario, setUsuario] = useState({
        deporte: '',
        idolo: ''
    })

    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    console.log(usuario)
    
    const handleSubmit = () => {
        if(usuario.idolo.length > 5 && usuario.deporte.length > 2 && usuario.deporte.trim()) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
        <h1>Tu deporte favorito</h1>
        <div>
            <label>Deporte Favorito</label>
            <input type="text" onChange={(event) => setUsuario({...usuario, deporte: event.target.value})}/>
        </div>
        <div>
            <label>Tu idolo</label>
            <input type="text" onChange={(event) => setUsuario({...usuario, idolo: event.target.value})}/>
        </div>
        <button onClick={handleSubmit}>Enviar</button>
        {enviado && <Card usuario={usuario}/>}
        {error && <h3 style={{color: 'red'}}>Por favor chequea que la informacion sea correcta</h3>}
    </div>
  )
}

export default Form