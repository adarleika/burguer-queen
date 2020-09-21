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
         console.log(arrayData[3].name[1].price)
         console.log(data)
        } catch (error){
          console.log(error)
        }
   
        
      }
      
     obtenerDatos()
   }, [])
   
   
   return (

            <div className="ContenedorPrincipalPedidos">
               <h1>Hola cocina</h1>

               
         {  
              pedidos.map(item =>(
              <p className="contenedorPedidos" key={item.id}>{item.id}</p>
               ))
              
           }
           
         
           
      </div>
   )
}

export default MasterCocina
