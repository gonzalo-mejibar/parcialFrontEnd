import React from 'react'

const Card = ({usuario}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>
            <h4 style={{margin: 20}}>Tu Deporte favorito es:</h4>
            <h4 style={{margin: 20 , color: 'red'}}>{usuario.deporte}</h4>
        </div>
        <div>
            <h4 style={{margin: 20}}>Tu Idolo es:</h4>
            <h4 style={{margin: 20 , color: 'red'} }>{usuario.idolo}</h4>
        </div>
    </div>
  )
}

export default Card