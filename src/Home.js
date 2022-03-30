import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card'
import Header from './Header';
import Footer from './Footer';


function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            
            <div className="home_section">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Online Experience"
                    describtion="Unique activities we can do together, led by a world host"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Unique stay"
                    describtion="unique stay not only a place to sleep"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Entire house"
                    describtion="unique stay not only a place to sleep"
                />
            </div>
            <div className="home_section">
                <Card 
                   src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                   title="Hotel"
                   describtion="Enjoy the amazing sights view of the city in stunning five hotels."
                   price="R1300/per night"
                
                />
                <Card 
                     src="https://media.nomadicmatt.com/2018/apartment.jpg"
                     title="Apartment"
                     describtion="Superhost with great amenities and a fabolous shooping complex nearby.."
                     price="R970/per night"
                />
                <Card
                   src="https://images.unsplash.com/photo-1624060164763-42187cee937b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlcyUyMHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   title="Resorts"
                   describtion="An outdoor chill in the wild, having a feeling of the nature."
                   price="R540/per night"
                />
            </div>
            <Footer />
        </div>
    )
} 

export default Home
