import React, { useEffect, useState } from "react";
import './MenuEnsaladas.css'

function useEnsaladas() {
  const [ensaladas, setEnsaladas] = useState([])

  useEffect(() => {
    fetch("json/ensaladas.json")
      .then(response => response.json())
      .then(datos => {
        setEnsaladas(datos)
      })
  }, [])

  return ensaladas
}

export default function Datostres() {
  const ensaladas = useEnsaladas()
  return (
    <div className="contenedorDeEnsaladas">
      <table>
        <tr>
          <th><button id="" type="button" className="btnMenuTitulo">ENSALADAS</button></th>
        </tr>
        <tbody>
          {ensaladas.map(item => (
            <tr key={item.type}>
              <td><button id="" type="button" className="btnDetalleMenu">{item.name}:${item.price}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
