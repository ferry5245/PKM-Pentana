import React from "react";
import './Roadmap.scss'
import Roadmaps from "../../assets/roadmap.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Roadmap(){
    return(
        <div className="roadmap">
            <Header/>
            <div className="roadmaps">
                <img src={ Roadmaps } alt="Partner" />
            </div>
            <div><hr className="line"/></div>
            <Footer/>
        </div>
    )
}

export default Roadmap;