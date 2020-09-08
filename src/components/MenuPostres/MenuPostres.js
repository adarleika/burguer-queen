import React, { useEffect, useState } from "react";
import './MenuPostres.css'

function usePostres() {
    const [postres, setPostres] = useState([])
    useEffect(() => {
        fetch("json/postres.json")
            .then(response => response.json())
            .then(datos => {
                setPostres(datos)
            })
    }, [])
    return postres
}

export default function Datoscuatro() {
    const postres = usePostres()
    return (
        <div className="contenedorDePostres">
            <table>
                <tr>
                    <th><button id="" type="button" className="btnMenuTituloDos">POSTRES</button></th>
                </tr>
                <tbody>
                    {postres.map(item => (
                        <tr key={item.type}>
                            <td><button id="" type="button" className="btnDetalleMenuDos">{item.name}:${item.price}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
