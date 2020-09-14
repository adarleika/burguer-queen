import React, { Fragment, useEffect, useState } from "react";
import Ensaladas from './Ensaladas'
import Licores from '../MenuLicores/Licores'
import Postres from '../MenuPostres/Postres'
import Almuerzo from '../MenuAlmuerzo/Almuerzo'
import Bebidas from '../MenuBebidas/Bebidas'
import Picoteo from '../MenuCarta/Picoteo'
import Cart from '../Cart'
import './MenuEnsaladas.css'

//estado de las ensaladas//
function useEnsaladas() {
  const [ensaladas, setEnsaladas] = useState([])

  useEffect(() => {
    fetch("json/dataTotal.json")
      .then(response => response.json())
      .then(datos => {
        setEnsaladas(datos)
      })
  }, [])

  return ensaladas
}

export default function Datostres() {
  const ensaladas = useEnsaladas()
  //console.log (ensaladas)

  const arrayEnsaladas = ensaladas.filter(ensa => ensa.Type === "Ensaladas")
  console.log(arrayEnsaladas);

  const postres = useEnsaladas()
  const arrayPostres = postres.filter(pos => pos.Type === "Postres")
  console.log(arrayPostres)

  const licores = useEnsaladas()
  const arrayLicores = licores.filter(lico => lico.Type === "Licores")
  console.log(arrayLicores);

  const almuerzo = useEnsaladas()
  const arrayAlmuerzo = almuerzo.filter(almu => almu.Type === "Almuerzos")
  console.log(arrayAlmuerzo);

  const bebidas = useEnsaladas()
  const arrayBebidas = bebidas.filter(bebi => bebi.Type === "Bebidas")
  console.log(arrayBebidas);

  const picoteo = useEnsaladas()
  const arrayPicoteo = picoteo.filter(picot => picot.Type === "Picoteo")
  console.log(arrayPicoteo);


  //estado del carrito, esta vacio porque aun usurio no ha elegido nada//
  const [cart, setCart] = useState([])
  return (
    <Fragment>
      <div className="contenedorEnsalada">

        <div className="contenedorTotal">
        <button id="" type="button" className="btnMenuTitulo">ENSALADAS</button>
        {arrayEnsaladas.map((ensaladita) => (
          <Ensaladas
            key={ensaladita.id}
            ensaladita={ensaladita}
            cart={cart}
            setCart={setCart}
            ensaladas={ensaladas}
          />
        ))}
      </div>
        <div className="contenedorPostres">
        <button id="" type="button" className="btnMenuTituloDos">POSTRES</button>
          {arrayPostres.map((postrecillo) => (
            <Postres
              key={postrecillo.id}
              postrecillo={postrecillo}
              cart={cart}
              setCart={setCart}
              postres={postres}
            />
          ))}

        </div>
        <div className="contenedorLicores">
        <button id="" type="button" className="btnMenuTituloDos">LICORES</button>
          {arrayLicores.map((licor) => (
            <Licores
              key={licor.id}
              licor={licor}
              cart={cart}
              setCart={setCart}
              licores={licores}
            />
          ))}
        </div>


        <div className="contenedorAlmuerzo">
        <button id="" type="button" className="btnMenuTitulo">ALMUERZOS</button>
          {arrayAlmuerzo.map((almu) => (
            <Almuerzo
              key={almu.id}
              almu={almu}
              cart={cart}
              setCart={setCart}
              almuerzo={almuerzo}
            />
          ))}
        </div>

        <div className="contenedorBebidas">
          <button id="" type="button" className="btnMenuTituloDos">BEBIDAS</button>
          {arrayBebidas.map((bebida) => (
            <Bebidas
              key={bebida.id}
              bebida={bebida}
              cart={cart}
              setCart={setCart}
              bebidas={bebidas}
            />
          ))}
        </div>

        <div className="contenedorMenu">
            <button id="" type="button" className="btnMenuTitulo">PICOTEO</button>
            {arrayPicoteo.map((picot) =>  (
             <Picoteo
             key={picot.id}
             picot={picot}
             cart={cart}
             setCart={setCart}
             picoteo={picoteo}
             />
           ))}
        </div>

        <Cart
          cart={cart}
          setCart={setCart}
        />
    </div>
 
    </Fragment>
  )
};
