import React from "react";
import camarero from '../../assets/imagenes/camarero.png';
import './MenuLateral.css';
import { NavLink } from 'react-router-dom';
import PedidosCocina from '../../view/viewCocina';
import EstatusPedidos from '../../view/viewEstatusPedidos';

class MenuLateral extends React.Component{
    render () {
        return(
            <React.Fragment>
            {/*<h1> esto es la vista del menu lateral</h1>*/}
                <div className="lateralmenu">
                    <img src={camarero} className="img-izq" alt="camarero"/> 
                    <NavLink to="/viewCocina" id="pedido" type="button" className="button1">HACER PEDIDO</NavLink>
                    <NavLink to="/viewEstatusPedidos"   id="mipedido" type="button" className="button2">MIS PEDIDO</NavLink>
                </div>
            </React.Fragment>
        );
   }
   
FuncionCocina(){
    //const PedidosMesero = useState([])
    return (
        //PedidosMesero
        <PedidosCocina/>
    );
}

FunctionEstatus(){
    //const PedidosMesero = useState([])
    return (
        //PedidosMesero
        <EstatusPedidos/>
        

    );
    }
 }
export default MenuLateral;





