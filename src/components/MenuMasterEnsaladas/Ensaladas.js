import React from 'react'
//import firebase from 'firebase/app'
import 'firebase/firestore'
import {firebase} from '../../firebase'



const Ensaladas = ({ ensaladita, cart, setCart, ensaladas }) => {

  const { name, price, id } = ensaladita
  const addEnsalada = id => {
    const ensaladita = ensaladas.filter((ensaladita) => ensaladita.id === id);
    setCart([...cart, ...ensaladita]);
    console.log(cart.length);
  };
  const delEnsalada = (id) => {
    const ensaladas = cart.filter(ensaladita => ensaladita.id !== id);
    setCart(ensaladas)
  }

  const aumentar =(id) => {
     
    
    //const aumentarEnsaladita = ( ensaladita.id === id +1);
    
    console.log(cart.length);
    const aumentarEnsaladita = ensaladas.reduce(function (ensaladita, itemId) {
      return itemId === ensaladita ? cart += 1 : ensaladita;
      
  }, 0);

  setCart([...cart, ...aumentarEnsaladita]);
     
  }


  const guardarPedido =  () =>{
   
      
      console.log(cart)
    const db= firebase.firestore()
    const nuevoPedido={
      name:cart
    }

    const data = db.collection('pedidos').add(nuevoPedido)

    setCart([
      ...cart,
      {...nuevoPedido,id:data.id}

    ])
    setCart('')
    }

   

  
  /*const [contador, setContador]=useState()
    const aumentar =(id) => {
     
      setCart(cart.price +1)

      
  

       
    }
  
    
    const restar =() => {
      setContador(contador -1)

  }
  
*/
 
    
  return (
    <div>
      <ul>
        

      {ensaladas ? (
        <div>
          <button
            className="btnDetalleMenu"
            type="button"
            onClick={() => addEnsalada(id)}
          >
            {ensaladita.name}:${ensaladita.price}
          </button>
            
          
            </div>          
        ) : (
          
            <div>
             <p>{ensaladita.name}:${ensaladita.price}</p>
           {/*  <h3>Nuestro numero aumentando :{contador} </h3>*/}
              <button
                className=""
                type="button"
                onClick={() => delEnsalada(id)}
              >
                Eliminar
             </button>
              <button
                className=""
                type="button"
                onClick={() => delEnsalada(id)}
              >
                Confirmar
              </button>
      <button onClick={() => aumentar(id)}>+</button>
        {/*  <button onClick={() => restar()}>-</button>
        */}
            <button id="pedidococina" type="submit" className="buttonPedido" onClick={() => guardarPedido(id)}>Enviar Pedido</button>
            </div> 
          )}
 
            </ul>
            
    </div>
   
  );
};

export default Ensaladas;
