import React from 'react'


const Licores = ({ licor, cart, setCart, licores }) => {

    const { name, price, id } = licor
    const addLicor = id => {
      const licor = licores.filter((licor) => licor.id === id);
      setCart([...cart, ...licor]);
      console.log(cart.length);
    };
    const delLicor = (id) => {
      const licores = cart.filter(licor => licor.id !== id);
      setCart(licores)
    };
    return (
      <div>
        <ul>
          
  
        {licores ? (
            <button
              className="btnDetalleMenu"
              type="button"
              onClick={() => addLicor(id)}
            >
              {licor.name}:${licor.price}
            </button>
          ) : (
            
              <div>
               <p>{licor.name}:${licor.price}</p>
                <button
                  className=""
                  type="button"
                  onClick={() => delLicor(id)}
                >
                  Eliminar
               </button>
                <button
                  className=""
                  type="button"
                  onClick={() => delLicor(id)}
                >
                  Confirmar
                </button>
              </div>
            )}
                 
  
  
  
              </ul>
  
      </div>
    );
  };
  
  export default Licores;
  