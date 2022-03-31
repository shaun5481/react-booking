import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


function Banner() {

    const history = useHistory();
    return (
        <div className="banner">
           
            <div className="banner_info">
                <p>Looking for a place to find chill? We here for you!</p>
            
                <Button onClick={() => history.push('/rooms')} variant='outlined' >Explore!</Button>
            </div>
        </div>
    )
}
 
export default Banner
  