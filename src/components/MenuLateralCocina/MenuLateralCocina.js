import React from "react";
import cocinero from '../../assets/imagenes/cocinero.png';
import './MenuLateralCocina.css';

class MenuLateralCocina extends React.Component{
    render () {
        return(
            <React.Fragment>
            {/*<h1> esto es la vista del menu lateral</h1>*/}
                <div className="literalmenucocina">
                    <img src={cocinero} class="cocinerococina" alt="camarero"/> 
               
                <button id="preparacion" type="button" class="btnprepara">EN PREPARACION </button>
                <button id="listos" type="button" class="btnlisto">LISTOS PARA SERVIR</button>
                 </div>
            </React.Fragment>
        );
   }
    
}
export default MenuLateralCocina;