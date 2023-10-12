import React from "react";
import './Home.scss'
import Partners from "../../assets/partners.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";

function Home(){
    return(
        <div className="home">
            <Header/>
            {/* Page Title */}
            <h1>SMARTBOAT</h1>
            
            {/* Carrousel Components */}
            <div className="messages">
                <div className="carousel-side">
                    <p>Apa yang Mereka Katakan tentang Smart Boat?</p>
                </div>
                <div className="carousel" id="carousel">
                    <HomeCarousel/>
                </div>
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