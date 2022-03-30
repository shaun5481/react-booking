import { FavoriteBorderIcon } from '@material-ui/icons/FavoriteBorder';
import { StarIcon } from '@material-ui/icons/StarHalfSharp';
import React from 'react';
import './SearchResult.css';


function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
}) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
             <div className="searchResult__info">
                 <div className="searchResult__infoTop">
                   <p>{location}</p>
                   <h3>{location}</h3>
                   <p>____</p>
                   <p>{description}</p>
                 </div>
                 <div className="searchResult__infoBottom">
                     <div className="searchResult__stars">
                         <p>
                             <strong>{star}</strong>
                         </p>
                    </div>
                    <div className="searchResult__price">
                        <h3>{price}</h3>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default SearchResult
