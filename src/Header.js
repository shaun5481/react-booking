import React, { useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';
import './Search.css'
import "react-date-range/dist/styles.css";//main style file
import "react-date-range/dist/theme/default.css";//theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory, useLocation, useParams } from "react-router-dom";

   


function Header({match}) {
    const [search, setSearch] = useState("");
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const passSearch = () => {
        history.push({
            pathname: '/search',
            query: {
                location:search,
            }
        });
    }


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
 
    return (
        <header className="head">
        <div className="header">
            <Link className="Link_home" to="/home">
            <h1 >StayIn</h1>
            </Link>
            
            <div className="header_center">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type= "search" placeholder= "Find your stay" />
                <SearchIcon className="icon" />
            </div>

            <div className="header_right">
               <MenuIcon />
               <Avatar />
            </div>
           
        </div>
        {search && <div>
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect} rangeColors={["#FD5B61"]}/>
            
            <h2>Number of guests <PeopleIcon /></h2>
                <input min={0} defaultValue={2} type="number"/>
                 <Button onClick={passSearch}>Search StayIn</Button>
            </div>}
        
        </header>
    )
}

export default scriptLoader(["https://maps.googleapis.com/maps/api/js?key=${process.env}&libraries=places"])( Header)
