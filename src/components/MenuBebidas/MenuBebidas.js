import React, { Fragment, useEffect, useState } from "react";
import Bebidas from './Bebidas'
//import Cart from '../Cart'
import './MenuBebidas.css'

function useBebidas() {
  const [bebidas, setBebidas] = useState([])

  useEffect(() => {
    fetch("json/bebidas.json")
      .then(response => response.json())
      .then(datos => {
        setBebidas(datos)
      })
  }, [])

  return bebidas
}

export default function DatosCinco() {
  const bebidas = useBebidas()
  const [cart, setCart]= useState([])
  const arrayBebidas =bebidas.filter(bebi => bebi.Type === "Bebidas")
  console.log ( arrayBebidas);
  return (
    <Fragment>
    <div className="contenedorDeBebidas">

    {/*<button id="" type="button" className="btnMenuTituloDos">BEBIDAS</button>*/}

             
    {arrayBebidas.map((bebida) =>  (
            <Bebidas
            key={bebida.id}
            bebida={bebida}
            cart={cart}
            setCart={setCart}
            bebidas={bebidas}
            />
          ))}
          
  
      </div>
    </Fragment>
  )
};