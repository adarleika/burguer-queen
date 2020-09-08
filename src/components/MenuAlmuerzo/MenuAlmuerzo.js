import React, { useEffect, useState } from "react";
import './MenuAlmuerzo.css'

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
   
    return (
   
       <div className="contenedorDeAlmuerzo">
       
       
         
          <table>
          <tr>


<th><button id="" type="button" className="btnMenuTitulo">ALMUERZOS</button></th>


</tr>
             <tbody>
  
             {almuerzo.map(item => (
  
               <tr key={item.type}>
                 <td><button id="" type="button" className="btnDetalleMenu">{item.name}:${item.price}</button></td>
                
               </tr>
              
             ))}
  
             </tbody>
  
           </table>
  
         </div>
  
           )
  };
 