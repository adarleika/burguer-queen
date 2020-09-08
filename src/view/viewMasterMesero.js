import React from 'react'
import MenuCarta from '../components/MenuCarta/MenuCarta'
import MenuLateral from '../components/MenuLateral/MenuLateral'
import MenuPedido from '../components/MenuPedido/MenuPedido'
import MenuAlmuerzo from '../components/MenuAlmuerzo/MenuAlmuerzo'


function PedidosMesero() {
    return(
    <div>
        <MenuAlmuerzo/>
        <MenuCarta/>
        <MenuLateral/>
        <MenuPedido/>
        
    </div> 
    )
}


export default PedidosMesero