import React from "react";
import "./Cards.scss";

function Cards({ content, name, image }) {
    return (
        <div className="cards">
            
            <div className="cards__content"> 
                <div>"</div>
                <p>{ content } </p>
            </div>
            <div className="second">
                <p className="second__name"> { name } </p>
                <img className="secons__images" src={ image } alt={ image } />
            </div>
        </div>
    );
  }
  

export default Cards;