import React from 'react'


const Bebidas = ({ bebida, cart, setCart, bebidas }) => {

    const { name, price, id } = bebida
    const addBebida = id => {
      const bebida = bebidas.filter((bebida) => bebida.id === id);
      setCart([...cart, ...bebida]);
      console.log(cart.length);
    };
    const delBebida = (id) => {
      const bebidas = cart.filter(bebida => bebida.id !== id);
      setCart(bebidas)
    };
    return (
      <div>
        <ul>
          
  
        {bebidas ? (
            <button
              className="btnDetalleMenu"
              type="button"
              onClick={() => addBebida(id)}
            >
              {bebida.name}:${bebida.price}
            </button>
          ) : (
            
              <div>
               <p>{bebida.name}:${bebida.price}</p>
                <button
                  className=""
                  type="button"
                  onClick={() => delBebida(id)}
                >
                  Eliminar
               </button>
                <button
                  className=""
                  type="button"
                  onClick={() => delBebida(id)}
                >
                  Confirmar
                </button>
              </div>
            )}
                 
  
  
  
              </ul>
  
      </div>
    );
  };
  
  export default Bebidas;
  