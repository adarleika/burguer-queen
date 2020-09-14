import React from 'react'


const Picoteo = ({ picot, cart, setCart, picoteo }) => {

    const { name, price, id } = picot
    const addPicot = id => {
      const picot = picoteo.filter((picot) => picot.id === id);
      setCart([...cart, ...picot]);
      console.log(cart.length);
    };
    const delPicot = (id) => {
      const Picoteo = cart.filter(picot => picot.id !== id);
      setCart(picoteo)
    };

    return (
      <div>
        <ul>  
        {picoteo ? (
            <button
              className="btnDetalleMenu"
              type="button"
              onClick={() => addPicot(id)}
            >
              {picot.name}:${picot.price}
            </button>
          ) : (
            
              <div>
               <p>{picot.name}:${picot.price}</p>
                <button
                  className=""
                  type="button"
                  onClick={() => delPicot(id)}
                >
                  Eliminar
               </button>
                <button
                  className=""
                  type="button"
                  onClick={() => delPicot(id)}
                >
                  Confirmar
                </button>
              </div>
            )}
                 
  
  
  
              </ul>
  
      </div>
    );
  };
  
  export default Picoteo;
  