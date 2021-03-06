import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InicioLog from '../src/view/viewInicioLogin';
//import MenuCarta from '../src/components/MenuCarta/MenuCarta';
//import MenuLateral from './components/MenuLateral/MenuLateral';
import PedidosMesero from '../src/view/viewMasterMesero';
import EstatusPedidos from '../src/view/viewEstatusPedidos';
import PedidosCocina from '../src/view/viewCocina';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={InicioLog} />
                    <Route exact path="/viewMasterMesero" component={PedidosMesero} />
                    <Route exact path="/viewEstatusPedidos" component={EstatusPedidos} />
                    <Route exact path="/viewCocina" component={PedidosCocina} />
                </Switch>
            </BrowserRouter>
        );
   }
}
export default Router;