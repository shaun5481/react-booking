import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


function Banner() {

    const history = useHistory();
    return (
        <div className="banner">
           
            <div className="banner_info">
                <h1>Looking for a place to find chill? We here for you!</h1>
            
                <Button onClick={() => history.push('/search')} variant='outlined' >Explore!</Button>
            </div>
        </div>
    )
}
 
export default Banner
  