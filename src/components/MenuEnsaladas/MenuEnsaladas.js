import React, { Fragment, useEffect, useState } from "react";
import Ensaladas from './Ensaladas'
import Cart from '../Cart'
import './MenuEnsaladas.css'

//estado de las ensaladas//
function useEnsaladas() {
  const [ensaladas, setEnsaladas] = useState([])

  useEffect(() => {
    fetch("json/ensaladas.json")
      .then(response => response.json())
      .then(datos => {
        setEnsaladas(datos)
      })
  }, [])

  return ensaladas
}





export default function Datostres() {
  const ensaladas = useEnsaladas()
  //estado del carrito, esta vacio porque aun usurio no ha elegido nada//
  const [cart, setCart]= useState([])
  return (
    <Fragment>
    <div className="contenedorDeEnsaladas">
     
        
          <button id="" type="button" className="btnMenuTitulo">ENSALADAS</button>
        
        
          
          {ensaladas.map((ensaladita) =>  (
            <Ensaladas
            key={ensaladita.id}
            ensaladita={ensaladita}
            cart={cart}
            setCart={setCart}
            ensaladas={ensaladas}
            />
          ))}
        
        
          <Cart 
          cart={cart} 
          setCart={setCart}
           />

         

        
      
    </div>
    </Fragment>
  )
};
