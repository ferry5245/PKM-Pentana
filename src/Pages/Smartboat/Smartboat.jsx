import React from "react";
import './Smartboat.scss'
import Smartboats from "../../assets/smartboats.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Smartboat(){
    return(
        <div className="smartboat">
            <Header/>
            <div className="smartboats">
                <img src={ Smartboats } alt="Partner" />
            </div>
            <Footer/>
        </div>
    )
}

export default Smartboat;