import React from "react";
import './MenuPedido.css';

class MenuPedido extends React.Component{
    render () {
        return(
            <React.Fragment>
           <h1> esto es la vista del menu para pedido</h1>
           <div className="pedidomenu">
            <button id="pedidococina" type="button" className="button">Enviar Pedido</button>

        </div>
    
    </React.Fragment>
        );
   }
    
}
export default MenuPedido;