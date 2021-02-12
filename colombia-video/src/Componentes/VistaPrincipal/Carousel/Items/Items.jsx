import React from "react"

import "./styles.css"
import Img1 from "../../../../Assets/images/1.jpg"
import Play from "../../../../Assets/images/play-icon.png"
import Plus from "../../../../Assets/images/plus-icon.png"

function Items (){
    return(
        <div className="carousel_items">
            <img src={Img1} alt=""/>
            <div className="carousel_items_detalle">
                <div className="carousel_items_detalle_img">
                    <img src={Play} alt=""/>
                    <img src={Plus} alt=""/>
                </div>
                <p className="carousel_items_detalle_titulo">Título descriptivo</p>
                <p className="carousel_items_detalle_subtitulo">2021 16+ 120min</p>
            </div>
        </div>
    )
}

export default Items