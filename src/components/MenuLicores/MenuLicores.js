import React, { Fragment, useEffect, useState } from "react";
import Licores from './Licores'
//import Cart from '../Cart'
import './MenuLicores.css'

function useLicores() {
  const [licores, setLicores] = useState([])

  useEffect(() => {
    fetch("json/licores.json")
      .then(response => response.json())
      .then(datos => {
        setLicores(datos)
      })
  }, [])

  return licores
}

export default function DatosSeis() {
  const licores = useLicores()
  const [cart, setCart]= useState([])
  const arrayLicores =licores.filter(lico => lico.Type === "Licores")
  console.log ( arrayLicores);
  return (
    <Fragment>
          <div className="contenedorDeLicores">

          {/*<button id="" type="button" className="btnMenuTituloDos">LICORES</button>*/}

                    
          {arrayLicores.map((licor) =>  (
            <Licores
            key={licor.id}
            licor={licor}
            cart={cart}
            setCart={setCart}
            licores={licores}
            />
          ))}
          
        {/*  <Cart 
          cart={cart} 
          setCart={setCart}
           />
        */}
      </div>
    </Fragment>
  )
};