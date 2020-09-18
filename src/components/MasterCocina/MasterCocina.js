import React from 'react'
import './MasterCocina.css';

import {firebase} from '../../firebase'

const MasterCocina = () => {

   const [pedidos,setPedidos] = React.useState([])

   React.useEffect ( () =>{
      const obtenerDatos = async () =>{
        try{
          const db = firebase.firestore()
          const data = await db.collection ('pedidos').get()
          console.log(data.docs)
          const arrayData = data.docs.map(doc =>({id:doc.id,...doc.data()}) )
         console.log(arrayData)
         setPedidos(arrayData)
   
        } catch (error){
          console.log(error)
        }
   
   
      }
     obtenerDatos()
   }, [])
   

   return (

            <div>
               <h1>Hola cocina</h1>
         <ul>
         {
              pedidos.map(item =>(
                 <li key={item.id}>{item.price}</li>
                             ))

           }

           </ul> 
      </div>
   )
}

export default MasterCocina
