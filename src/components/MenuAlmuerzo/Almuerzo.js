import React from 'react'


const Almuerzo = ({ almu, cart, setCart, almuerzo }) => {

    const { id } = almu
    const addAlmuerzo = id => {
      const almu = almuerzo.filter((almu) => almu.id === id);
      setCart([...cart, ...almu]);
      console.log(cart.length);
    };
    const delAlmuerzo = (id) => {
      const almuerzo = cart.filter(almu => almu.id !== id);
      setCart(almuerzo)
    };
    return (
      <div>
        <ul>
          
  
        {almuerzo ? (
            <button
              className="btnDetalleMenu"
              type="button"
              onClick={() => addAlmuerzo(id)}
            >
              {almu.name}:${almu.price}
            </button>
          ) : (
            
              <div>
               <p>{almu.name}:${almu.price}</p>
                <button
                  className=""
                  type="button"
                  onClick={() => delAlmuerzo(id)}
                >
                  Eliminar
               </button>
                <button
                  className=""
                  type="button"
                  onClick={() => delAlmuerzo(id)}
                >
                  Confirmar
                </button>
              </div>
            )}
                 
  
  
  
              </ul>
  
      </div>
    );
  };
  
  export default Almuerzo;
  