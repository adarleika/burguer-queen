import React , { Fragment } from 'react'
import Ensaladas from './MenuEnsaladas/Ensaladas'

//este renderisa en el componente Ensaladas//
const Cart = ({cart,setCart}) => {
    return (
        <Fragment>
        <div className= "Carrito">
           < h3>Cariito</h3>

        {cart.length === 0 ? (
            <p>No hay nada por aquí...</p>
       
        ):(
          cart.map ((ensaladita => 
          <Ensaladas
           key={ensaladita.id} 
           ensaladita={ensaladita} 
           cart={cart} 
           setCart={setCart} 
            />    
            ))
            )}

        
        </div>
        </Fragment>
    );
};

export default Cart
