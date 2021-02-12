import React, { Children } from "react"

import "../../Assets/css/header.css"
import Logo from "../../Assets/images/Logo-Quiz.png"

function Header({children}){
    return(
        <header className="cabezote">
        <div className="logo">
            <img src={Logo} alt=""/>
            <p>Películas, series y videos</p>
        </div>
        {children}
    </header>
    )
}

export default Header

