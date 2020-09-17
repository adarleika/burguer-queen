import React, { Fragment } from 'react'
import Ensaladas from './MenuMasterEnsaladas/Ensaladas'
import '../components/Cart.css'
//import Licores from './MenuLicores/Licores'
//import Contador from './Contador'
//este renderisa en el componente Ensaladas//
const Cart = ({ cart, setCart }) => {
    return (
        <Fragment>
            <div className="Carrito">
               

                {cart.length === 0 ? (
                    <p>No has seleccionado ningun pedido</p>

                ) : (
                        cart.map((ensaladita) =>
                        <div>
                            <Ensaladas
                                key={ensaladita.id}
                                ensaladita={ensaladita}
                                cart={cart}
                                setCart={setCart}
                            />
               
                            </div>
                            
            )


                    )
                }
                

            </div>
        </Fragment>
    );
};

export default Cart
