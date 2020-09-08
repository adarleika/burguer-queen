import React from 'react'
import MenuCarta from '../components/MenuCarta/MenuCarta'
import MenuLateral from '../components/MenuLateral/MenuLateral'
import MenuPedido from '../components/MenuPedido/MenuPedido'
import MenuAlmuerzo from '../components/MenuAlmuerzo/MenuAlmuerzo'
import MenuEnsaladas from '../components/MenuEnsaladas/MenuEnsaladas'
import MenuPostres from '../components/MenuPostres/MenuPostres'


function PedidosMesero() {
    return(
    <div>
        <MenuEnsaladas/>
        <MenuAlmuerzo/>
        <MenuCarta/>
        <MenuLateral/>
        <MenuPedido/>
        <MenuPostres/>
        
    </div> 
    )
}


export default PedidosMesero