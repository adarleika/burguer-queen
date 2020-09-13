import React, { Fragment } from 'react'
import Ensaladas from './MenuEnsaladas/Ensaladas'
import Licores from './MenuLicores/Licores'

//este renderisa en el componente Ensaladas//
const Cart = ({ cart, setCart }) => {
    return (
        <Fragment>
            <div className="Carrito">
                < h3>Cariito</h3>

                {cart.length === 0 ? (
                    <p>No hay nada por aquí...</p>

                ) : (
                        cart.map((ensaladita, licor) =>
                        <div>
                            <Ensaladas
                                key={ensaladita.id}
                                ensaladita={ensaladita}
                                cart={cart}
                                setCart={setCart}
                            />
                            <Licores
                                key={licor.id}
                                licor={licor}
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
