import React from 'react'


const Ensaladas = ({ ensaladita, cart, setCart, ensaladas }) => {

  const {  id } = ensaladita
  const addEnsalada = id => {
    const ensaladita = ensaladas.filter((ensaladita) => ensaladita.id === id);
    setCart([...cart, ...ensaladita]);
    console.log(cart.length);
  };
  const delEnsalada = (id) => {
    const ensaladas = cart.filter(ensaladita => ensaladita.id !== id);
    setCart(ensaladas)
  };
  return (
    <div>
      <ul>
        

      {ensaladas ? (
          <button
            className="btnDetalleMenu"
            type="button"
            onClick={() => addEnsalada(id)}
          >
            {ensaladita.name}:${ensaladita.price}
          </button>
        ) : (
          
            <div>
             <p>{ensaladita.name}:${ensaladita.price}</p>
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
            </div>
          )}
               



            </ul>

    </div>
  );
};

export default Ensaladas;
