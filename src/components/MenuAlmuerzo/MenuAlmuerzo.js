import React, { Fragment, useEffect, useState } from "react";
import './MenuAlmuerzo.css'
import Almuerzo from './Almuerzo'
//import Cart from '../Cart'

function useAlmuerzo() {
  const [almuerzo, setAlmuerzo] = useState([])

  useEffect(() => {
    fetch("json/almuerzo.json")
      .then(response => response.json())
      .then(datos => {
        setAlmuerzo(datos)
      })
  }, [])

  return almuerzo
}

export default function DatosDos() {
  const almuerzo = useAlmuerzo()
  const [cart, setCart]= useState([])
  const arrayAlmuerzo =almuerzo.filter(almu => almu.Type === "Almuerzos")
  console.log ( arrayAlmuerzo);
  return (
    <Fragment>
    <div className="contenedorDeAlmuerzo">

    {/*<button id="" type="button" className="btnMenuTitulo">ALMUERZOS</button>*/}
      
    {arrayAlmuerzo.map((almu) =>  (
            <Almuerzo
            key={almu.id}
            almu={almu}
            cart={cart}
            setCart={setCart}
            almuerzo={almuerzo}
            />
          ))}

         
    </div>
    </Fragment>
  )
};
