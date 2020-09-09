import React from "react";
import './MenuPedido.css';

function MenuPedido () {
    const[nombre,setNombre]=React.useState('')
    const[nombresPintar,setnombresPintar]=React.useState([])


    const agregarNombre = e =>{
        e.preventDefault()
        console.log(nombre)
        /*vamos a agregar if para cuando no haya nombre*/
        if (!nombre.trim()){
            console.log('Elemento Vacio')
            return
        }
        console.log(nombre)
        setnombresPintar([
                ...nombresPintar,
                {nombreCliente:nombre}
            ])

        /*una vez que el nombre se haya ingresado le pasamos el string vacio para que limpie*/
        setNombre('')
    }

        return(
            <React.Fragment>
            <div className="ContenedorDePedido">
                <h1 className="TituloPedido">Pedido</h1>
                <hr></hr>
                
                
                <div>
                <form onSubmit={agregarNombre} >
                   <input type="text" 
                   className="nombreCliente"
                   placeholder="Nombre del Cliente"
                   onChange={e =>setNombre(e.target.value)}
                   value={nombre}
                   >

                 </input>
                
                          <button id="pedidococina" type="submit" className="buttonPedido">Enviar Pedido</button>
                       
               </form>
                  </div>
                    <h2 className="NombreCodigoMesero">Codigo Mesero</h2>
                    <h2 className="NumeroDePedido">Numero de Pedido</h2>

                

                <h1 className="TituloProductos">Productos</h1>
                <ul>
                    <li>
                        <span>nombre del Producto</span>
                        <div className="pedidomenu">
                          <button id="pedidococina" type="submit" className="buttonPedido">Enviar Pedido</button>
                        </div>
                    </li>
              
              
                </ul>

                
        </div>
         
         </React.Fragment>
        );
   }
    
export default MenuPedido;