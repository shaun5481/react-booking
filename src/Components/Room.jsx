import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import "../searchPage.css";

export default function Room({room}) {
    const { name , slug, images, price } = room;
    return (
        <div className="searchResult">
        <img src={images[0] || defaultImg} alt="single room"/>
          <div className="searchResult__info">
              <div className="searchResult__infoTop">
              <Link to={`/rooms/${slug}`} >Explore</Link>
                <p>____</p>
                <p>{name}</p>
              </div>
              <div className="searchResult__infoBottom">
                 <div className="searchResult__price">
                 <h6>R {price}</h6>
                 <p>per night</p>
                 </div>
              </div>
          </div>
     </div>
    )
}
 
Room.propTypes = {
    room: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}