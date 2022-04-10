import React from 'react'
import ReactDOM from 'react-dom';

export const PrimeraApp = () => {

    const objetito = {
        nombre:"idaira",
        edad:34,
    }
  return (
      <>
      <div>PrimeraApp</div>
      <pre> {JSON.stringify(objetito)}</pre>
      </>
    
    
  )
}

