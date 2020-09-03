import React from "react";
import logo_size from '../../assets/imagenes/logo_size.jpg'; 
import camarero from '../../assets/imagenes/camarero.png';
import cocinero from '../../assets/imagenes/cocinero.png';
import './InicioLogin.css';

class InicioLogin extends React.Component{
     render(){
        return (
            <React.Fragment>
                <div className="contenedor"> 
                <img src={logo_size} className="App-logo" alt="logo_size"/> 
                
                <img src={camarero} className="camarero" alt="camarero"/> 
                <img src={cocinero} className="cocinero" alt="cocinero"/> 
                </div>
            </React.Fragment>
            
        );

     }

}
export default InicioLogin;