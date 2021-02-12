import React from "react"

import "./styles.css"

function Hero (){
    return(
        <section className="login">
        <section className="login_contenedor">
            <h2>Inicia Sesión</h2>
            <form className="login_contenedor_form">
                <input className="input" type="text" placeholder="Correo"/>
                <input className="input" type="password" placeholder="Contraseña"/>
                <button className="boton">Iniciar Sesión</button>
                <div className="login_contenedor_recuerdame">
                    <label>
                        <input type="checkbox" id="ccaja1" value="first_checkbox"/>
                        Recuérdame
                    </label>
                    <a href="">Olvide mi contraseña</a>
                </div>
            </form>

            <section className="login_contenedor_socialm">
                <div>
                    <a href="#">
                        <i className="fab fa-google"></i>
                    </a>
                    Inicia sesión con Google
                </div>
                <div>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    Inicia sesión con Twitter
                </div>
            </section>
            <p className="login_contenedor_registro">
                "No tienes ninguna cuenta"
                <a href="">Regístrate</a>
            </p>
        </section>
        </section>

    )
}

export default Hero