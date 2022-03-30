import React from 'react';
import './Card.css'

function Card({ src, title, describtion, price}) {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{describtion}</h4>
                <h3>{price}</h3>
            </div>
            
        </div>
    )
}

export default Card
