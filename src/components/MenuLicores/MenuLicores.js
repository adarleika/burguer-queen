import React, { useEffect, useState } from "react";
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
   
    return (
   
       <div className="contenedorDeLicores">
       
       
         
          <table>
          <tr>


         <th><button id="" type="button" className="btnMenuTitulo">Licores</button></th>


        </tr>
             <tbody>
  
             {licores.map(item => (
  
               <tr key={item.type}>
                 <td><button id="" type="button" className="btnDetalleMenu">{item.name}:${item.price}</button></td>
                
               </tr>
              
             ))}
  
             </tbody>
  
           </table>
  
         </div>
  
           )
  };
 