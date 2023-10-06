import React from "react";
import './Home.scss'
import Partners from "../../assets/partners.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home(){
    return(
        <div className="home">
            <Header/>
            {/* Page Title */}
            <h1>SMARTBOAT</h1>
            
            {/* Carrousel Components */}
            <div className="carrousel-side">
                A
            </div>
            <div className="carrousel" id="carrousel">
                B
            </div>

            {/* Partner Part */}
            <div className="partners">
                <img src={ Partners } alt="Partner" />
            </div>
            <Footer/>
        </div>
    )
}

export default Home;