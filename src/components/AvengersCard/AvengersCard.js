import React from "react";
import "./AvengersCard.css";

const AvengersCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectAvenger(props.name)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.name} src={props.image} />
            
            </a>
        </div>
        
    </div>
    
);

export default AvengersCard;
