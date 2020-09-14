import React, { Fragment, useEffect, useState } from "react";
import Picoteo from './Picoteo'
//import Cart from '../Cart'
import './MenuCarta.css'

function usePicoteo() {
  const [picoteo, setPicoteo] = useState([])

  useEffect(() => {
    fetch("json/picoteo.json")
      .then(response => response.json())
      .then(datos => {
        setPicoteo(datos)
      })
  }, [])

  return picoteo
}

export default function Datos() {
  const picoteo = usePicoteo()
  const [cart, setCart] = useState([])
  const arrayPicoteo = picoteo.filter(picot => picot.Type === "Picoteo")
  console.log(arrayPicoteo);

  return (
    <Fragment>
      <div className="contenedorDeMenu">
        {/*<button id="" type="button" className="btnMenuTituloDos">PICOTEO</button>*/}
        {arrayPicoteo.map((picot) => (
          <Picoteo
            key={picot.id}
            picot={picot}
            cart={cart}
            setCart={setCart}
            picoteo={picoteo}
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


//const initialOrder=[]
  // initialOrder.push({ "name": orderName, "value": orderPrice });
   //setOrder(initialOrder+1);
   //console.log(order);
   //console.log(initialOrder);
