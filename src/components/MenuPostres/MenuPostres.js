import React, { Fragment, useEffect, useState } from "react";
import './MenuPostres.css'
import Postres from './Postres'
import Cart from '../Cart'

function usePostres() {
    const [postres, setPostres] = useState([])
    useEffect(() => {
        fetch("json/dataTotal.json")
            .then(response => response.json())
            .then(datos => {
                setPostres(datos)
            })
    }, [])
    return postres
}

export default function Datoscuatro() {
    const postres = usePostres()

    const [cart, setCart]= useState([])
    const arrayPostres =postres.filter(postrecillo => postrecillo.Type === "Postres")
      console.log ( arrayPostres);

    return (
        <Fragment>
        <div className="contenedorDePostres">
        <button id="" type="button" className="btnMenuTituloDos">POSTRES</button>
            
        {arrayPostres.map((postrecillo) =>  (
            <Postres
            key={postrecillo.id}
            postrecillo={postrecillo}
            cart={cart}
            setCart={setCart}
            postres={postrecillo}
            />
          ))}
        </div>
            </Fragment>


    )
};
