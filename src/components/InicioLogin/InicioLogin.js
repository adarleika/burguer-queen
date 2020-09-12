import React from "react";
import AMA02 from '../../assets/imagenes/AMA02.png'; 
import camarero from '../../assets/imagenes/camarero.png';
import cocinero from '../../assets/imagenes/cocinero.png';
import './InicioLogin.css';
import PedidosMesero from '../../view/viewMasterMesero';
import PedidosCocina from '../../view/viewCocina';
import { NavLink } from 'react-router-dom';



class InicioLogin extends React.Component{
     render(){
        return (
            <React.Fragment>
                <div className="contenedor"> 
                <img src={AMA02} className="App-logo" alt="AMA02"/> 
                
                <img src={camarero} className="camarero" alt="camarero"/>
                <img src={cocinero} className="cocinero" alt="cocinero"/> 

                <NavLink to="/viewMasterMesero" src={camarero} className="camarero" alt="camarero"></NavLink>
                <NavLink to="/viewCocina" src={cocinero} className="cocinero" alt="cocinero"></NavLink>

                </div>
                
            </React.Fragment>
            
            
        );
     
      }


     myfunction(){
        //const PedidosMesero = useState([])
        return (
            //PedidosMesero
            <PedidosMesero/>
            
   
        );
 
     }
     funcioncocina(){
        //const PedidosMesero = useState([])
        return (
            //PedidosMesero
            <PedidosCocina/>
            
   
        );
 
     }
     
    }

export default InicioLogin;
