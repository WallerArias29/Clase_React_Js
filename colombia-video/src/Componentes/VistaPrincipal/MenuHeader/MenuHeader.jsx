import React from "react"

import "../../../Assets/css/header.css"
import User from "../../../Assets/images/user-icon.png"

function MenuHeader (){
    return(
        <div className="header_menu">
            <div className="menu">
                <a href="#">
                    <img src={User} alt=""/>
                        <p>Perfil</p>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">Cuenta</a>   
                </li>
                <li>
                    <a href="">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    )
}

export default MenuHeader