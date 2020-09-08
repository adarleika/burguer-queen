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
//exporto esta fucnion, pero no va a ninguan parte???
export default function Datos() {

   const menu = useMenu()

   return (

      <div className="contenedorDeMenu">

         <h1 className="TituloCarta"> Carta </h1>

         <table>


            <tr>

               <th><button id="" type="button" className=".btnMenuTituloDos">PICOTEO</button></th>
               

            </tr>
            {menu.map(item => (
               <tr key={item.type}>
                  <td><button id="" type="button" className="btnDetalleMenu">{item.name}:${item.price}</button></td>
               </tr>

            ))}
      </table>
         
      </div>
   )
};

