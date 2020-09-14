import React from "react";
import './MenuPedido.css';
//import unpedido from '../MenuCarta/MenuCarta';

//console.log(unpedido)

function MenuPedido() {
    const [nombre, setNombre] = React.useState('')
    const [nombresPintar, setnombresPintar] = React.useState([])
    //const[nombreProducto,setnombreProducto]=React.useState([])
    //const [menu, setMenu] = React.useState([])

    const agregarNombre = e => {
        e.preventDefault()
        console.log(nombre)
        /*vamos a agregar if para cuando no haya nombre*/
        if (!nombre.trim()) {
            console.log('Elemento Vacio')
            return
        }
        console.log(nombre)
        setnombresPintar([
            ...nombresPintar,
            { nombreCliente: nombre }
        ])

        /*una vez que el nombre se haya ingresado le pasamos el string vacio para que limpie*/
        setNombre('')
        //setMenu('')
    }

    return (
        <React.Fragment>
            <div className="ContenedorDePedido">
                <h1 className="TituloPedido">Pedido</h1>
                <hr></hr>


                <div>
                    <form onSubmit={agregarNombre} >
                        <input type="text"
                            className="nombreCliente"
                            placeholder="Nombre del Cliente"
                            onChange={e => setNombre(e.target.value)}
                            value={nombre}
                        >

                        </input>

                        <button id="pedidococina" type="submit" className="buttonPedido">Ingresar nombre</button>

                    </form>
                </div>
                <h2 className="NombreCodigoMesero">Codigo Mesero: M-001</h2>
                <h2 className="NumeroDePedido">Numero de Pedido: P-001</h2>






                <ul>
                    {
                        nombresPintar.map(item => (
                            <li key={item.nombreCliente}>
                                <span>{item.nombreCliente}</span>

                            </li>
                        ))
                    }
                </ul>
                <div className="pedidomenu">
                    <button id="pedidococina" type="submit" className="buttonPedido">Enviar Pedido</button>
                </div>
                <div>
                <h1 className="TituloProductos">Productos</h1>
                </div>

            </div>

        </React.Fragment>

    );
}

export default MenuPedido;