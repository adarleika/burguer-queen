import React from 'react'


const Postres = ({ postrecillo, cart, setCart, postres }) => {

  const { id } = postrecillo

  const addPostre = id => {
    const postrecillo = postres.filter((postrecillo) => postrecillo.id === id);
    setCart([...cart, ...postrecillo]);
    console.log(cart.length);
  };
  const delPostre = (id) => {
    const postres = cart.filter(postrecillo => postrecillo.id !== id);
    setCart(postres)
  };
  return (
    <div>
      <ul>
        

      {postres ? (
          <button
            className="btnDetalleMenu"
            type="button"
            onClick={() => addPostre(id)}
          >
            {postrecillo.name}:${postrecillo.price}
          </button>
        ) : (
          
            <div>
             <p>{postrecillo.name}:${postrecillo.price}</p>
              <button
                className=""
                type="button"
                onClick={() => delPostre(id)}
              >
                Eliminar
             </button>
              <button
                className=""
                type="button"
                onClick={() => delPostre(id)}
              >
                Confirmar
              </button>
            </div>
          )}
               



            </ul>

    </div>
  );
};

export default Postres;
