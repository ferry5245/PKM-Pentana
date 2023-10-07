import React from "react";
import './Smartboat.scss'
import SmartboatComp from "../../Components/SmartboatComp/SmartboatComp";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Smartboat(){
    return(
        <div className="smartboat">
            <Header/>
            <SmartboatComp/>
            <div><hr className="line"/></div>
            <Footer/>
        </div>
    )
}

export default Smartboat;