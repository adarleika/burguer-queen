import React from "react";
import camarero from '../../assets/imagenes/camarero.png';
import './MenuLateral.css';

class MenuLateral extends React.Component{
    render () {
        return(
            <React.Fragment>
            <h1> esto es la vista del menu lateral</h1>
           
                <img src={camarero} className="imgizq" alt="camarero"/> 
            
            <div className="lateralmenu">
                <button id="pedido" type="button" className="button1">HACER PEDIDO</button>
                <button id="mipedido" type="button" className="button2">MIS PEDIDOS</button>
            </div>
            </React.Fragment>
        );
   }
    
}
export default MenuLateral;





