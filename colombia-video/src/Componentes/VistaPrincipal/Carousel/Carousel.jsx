import React from "react"

import Items from "./Items/Items"

import "./styles.css"

function Carousel (){
    return(
        <>
        <h3 className="title">Mi lista</h3>

        <section className="carousel">
            <div className="carousel_container">
                <Items/>
                <Items/> 
                <Items/> 
                <Items/> 
                <Items/> 
                <Items/> 
                <Items/> 
                <Items/>     
            </div>
        </section>

        </>

    )
}

export default Carousel