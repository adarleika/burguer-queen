import React, { useEffect, useState } from "react";
import './MenuBebidas.css'

function useBebidas() {
  const [bebidas, setBebidas] = useState([])

  useEffect(() => {
    fetch("json/bebidas.json")
      .then(response => response.json())
      .then(datos => {
        setBebidas(datos)
      })
  }, [])

  return bebidas
}

export default function DatosCinco() {
  const bebidas = useBebidas()
  return (
    <div className="contenedorDeBebidas">
      <table>
        <tr>
          <th><button id="" type="button" className="btnMenuTituloDos">BEBIDAS</button></th>
        </tr>

        <tbody>
          {bebidas.map(item => (
            <tr key={item.type}>
              <td><button id="" type="button" className="btnDetalleMenuDos">{item.name}:${item.price}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
