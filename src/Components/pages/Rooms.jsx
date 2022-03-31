import React from 'react'
import Hero from '../Hero'
import Banner from '../Banner';
import Header from '../../Header'
import { Link } from 'react-router-dom';
import RoomsContainer from '../RoomsContainer';
const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Header title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/home" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Header>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
