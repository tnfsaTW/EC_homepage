import Header from "../components/header";
import Navbar from "../components/navbar";
import React from "react"

export default function Motivation(){
    return(
        <React.Fragment>
            <Header/>
            <Navbar page={"motivation"}/>
        </React.Fragment>
    )
}