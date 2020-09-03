import React from 'react'
import MenuCarta from '../components/MenuCarta/MenuCarta'
import MenuLateral from '../components/MenuLateral/MenuLateral'
import MenuPedido from '../components/MenuPedido/MenuPedido'


function PedidosMesero() {
    return(
    <div>
        <MenuCarta/>
        <MenuLateral/>
        <MenuPedido/>
    </div> 
    )
}


export default PedidosMesero