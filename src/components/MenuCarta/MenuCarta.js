import React, { useEffect, useState } from "react";
import './MenuCarta.css'
//funcion para traernos la data de los menus




const initialOrder=[]


//const Pedidos =()=>{


//}
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
   //////////////////////////////////////////////
   /* Constante que se va a crear para manejar la orden  */
   //const [menu, setMenu] = useState([]);
   ///////////////////////////////////////////
   //////const [order, setOrder] = useState([]);
   /* Para manejar click de cada opción */
   // const [opciones, setOpciones] = useState([]);
   const [order, setOrder] = useState([]);
   const handleClick = (e) => {
      // console.log(e.target.name);
      // console.log(e.target.value);
      const orderName = e.target.name;
      const orderPrice = e.target.value;
      console.log(orderName);
      console.log(orderPrice);
      initialOrder.push({ "name": orderName, "value": orderPrice });
      setOrder(initialOrder+1);
      console.log(order);
      console.log(initialOrder);
     

   };


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

                     <td><button id={item.id} className="btnDetalleMenu"
                        onClick={handleClick} name={item.name} value={item.price}
                     //{()=>

                     //console.log (item.name)
                     ///</td>//}
                     >{item.name}:${item.price}</button></td>



                     
                  </tr>

               ))}

            </tbody>
         </table>


         <div className="pedidoBox">
            {initialOrder.map((item, type) => {
               return <div key={type}>
                  <p>{item.name}</p>
                  <p>{item.value}</p>
                  </div>
                })}
         </div>
                   
      </div>
   );
}


