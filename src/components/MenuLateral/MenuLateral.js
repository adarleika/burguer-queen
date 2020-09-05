import React from "react";
import camarero from '../../assets/imagenes/camarero.png';
import './MenuLateral.css';

class MenuLateral extends React.Component{
    render () {
        return(
            <React.Fragment>
            {/*<h1> esto es la vista del menu lateral</h1>*/}
                <div className="lateralmenu">
                    <img src={camarero} class="img-izq" alt="camarero"/> 
               
                <button id="pedido" type="button" class="button1">HACER PEDIDO</button>
                <button id="mipedido" type="button" class="button2">MIS PEDIDO</button>
                 </div>
            </React.Fragment>
        );
   }
    
}
export default MenuLateral;





