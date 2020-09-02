import React from "react";
import logo_size from '../assets/imagenes/logo_size.jpg'; 

class InicioLogin extends React.Component{
     render(){
        return (
            <React.Fragment>
                <div className="contenedor"> 
                <img src={logo_size} className="App-logo" alt="logo_size"/> 
                <h1> hello soy el componente de InicioLogin </h1>
                
                </div>
            </React.Fragment>
            
        );

     }

}
export default InicioLogin;