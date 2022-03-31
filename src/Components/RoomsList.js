import React from 'react'
import Room from './Room';
import "../searchPage.css";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
       return (
            <div className="container my-5">
                <div className="card shadow-lg border-0 p-4">
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={require('../images/notfound.svg')}  alt="not found" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="empty-search">
                                <h3 className="display-4">Unfortunately no rooms matched your search parameters</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
    return (
        <section className="container" style={{marginLeft:240, width:100+'%'}}>
              <div className="searchPage_info  ">
                <h1>Stays nearby</h1>
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="history" ><Button variant="outline">HISTORY</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="google" ><Button variant="outline">GOOGLE MAP</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="history" ><Button variant="outline">History</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="history" ><Button variant="outline">History</Button> </Link> 

            </div>
            <div className="row my-5">
               {rooms.map(item => {
                    return <Room key={item.id} room={item}/>;
                })
               }
            </div>
        </section>
    );
}
