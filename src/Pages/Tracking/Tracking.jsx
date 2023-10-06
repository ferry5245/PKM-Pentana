import React from "react";
import './Tracking.scss'
import Partners from "../../assets/partners.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Tracking(){
    return(
        <div className="tracking">
            <Header/>
            {/* Page Title */}
            <h1>PELACAKAN NELAYAN</h1>
            
            {/* Map Components */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5723.355371521812!2d107.62976206867513!3d-6.973441272969227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1696604899736!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            
            {/* Boat Rotation Part */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5723.355371521812!2d107.62976206867513!3d-6.973441272969227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1696604899736!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            {/* Partner Part */}
            <div className="partners">
                <img src={ Partners } alt="Partner" />
            </div>
            <Footer/>
        </div>
    )
}

export default Tracking;