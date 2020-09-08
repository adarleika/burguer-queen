import React from "react";
import camarero from '../../assets/imagenes/camarero.png';
import './MenuLateral.css';

class MenuLateral extends React.Component{
    render () {
        return(
            <React.Fragment>
            {/*<h1> esto es la vista del menu lateral</h1>*/}
                <div className="lateralmenu">
                    <img src={camarero} className="img-izq" alt="camarero"/> 
               
                <button id="pedido" type="button" className="button1">HACER PEDIDO</button>
                <button id="mipedido" type="button" className="button2">MIS PEDIDO</button>
                 </div>
            </React.Fragment>
        );
   }
    
}
export default MenuLateral;





