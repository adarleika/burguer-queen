import React from 'react'

import MenuLateral from '../components/MenuLateral/MenuLateral'
import MenuPedido from '../components/MenuPedido/MenuPedido'

import MenuMasterEnsaladas from '../components/MenuMasterEnsaladas/MenuMasterEnsaladas'




function PedidosMesero() {
    return(
    <div>
        
        <MenuMasterEnsaladas/>
        <MenuLateral/>
        <MenuPedido/>
      
    </div> 
    )
}
export default PedidosMesero