import React, { useEffect, useState } from "react";
import './MenuCarta.css'
//funcion para traernos la data de los menus
function useMenu() {
   const [menu, setMenu] = useState([])

   useEffect(() => {
      fetch("json/picoteo.json")
         .then(response => response.json())
         .then(datos => {
            setMenu(datos)
         })
   }, [])
   return menu
}


export const unpedido = (producto) => {
   //e.preventDefault();
   //console.log("estoy escuchando")
   console.log(producto.name)
   console.log(producto.value)
   //console.log(producto.price)

}


const pedido = [];

// Creamos un objeto
const object = {pedido : 'id'};

// Lo guardamos en localStorage pasandolo a cadena con JSON
localStorage.setItem('key', JSON.stringify(object));

// Creamos una nueva variable object2 con el valor obtenido de localStorage usando JSON recuperar el objeto inicial
const object2 = JSON.parse(localStorage.getItem('key'));

// La alerta mostrará 1 por pantalla
//alert(object2.pedido);
console.log(object2.pedido);
//pedido = object2;

pedido.push(pedido);
console.log(pedido);

//exporto esta fucnion, pero no va a ninguan parte???
export default function Datos() {
   const menu = useMenu()
   return (
      <div className="contenedorDeMenu">
         <h1 className="TituloCarta"> Carta </h1>
         <table>
            <tr>
               <th><button id="" type="button" className="btnMenuTitulo">PICOTEO</button></th>
            </tr>
            <tbody>
               {menu.map(item => (
                  <tr key={item.type}>
                     <td><button id={item.id} name={item.name} value={item.price} type="button" className="btnDetalleMenu" onClick={
                         //console.log(item.name)
                       //<span>{item.price}</span>

                       (e)=>
                        unpedido(e.target)
                        
               
                     }


                     >{item.name}:${item.price}</button></td>



                  </tr>
               ))}

            </tbody>
         </table>
      </div>
   )
};

