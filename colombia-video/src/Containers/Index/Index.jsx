import React from "react"

import Header from "../../Componentes/Header/Header"
import MenuHeader from "../../Componentes/VistaPrincipal/MenuHeader/MenuHeader"
import Main from "../../Componentes/VistaPrincipal/Main/Main"
import Carousel from "../../Componentes/VistaPrincipal/Carousel/Carousel"
import Footer from "../../Componentes/Footer/Footer"

import "./styles.css"

function Index (){
    return(
        <>
        <Header>
            <MenuHeader/>
        </Header> 
        <Main/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Footer/>

        </>
    )
}

export default Index