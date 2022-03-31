import * as React from 'react';
import { Link } from 'react-router-dom'

import dateFormat from 'dateformat'

import { API, graphqlOperation } from 'aws-amplify'
import { listBookings } from "../graphql/queries"
import "../searchPage.css";
import { Button } from "@material-ui/core";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const drawerWidth = 240;

function History(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [history, setHistory] = React.useState([])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

     const fetch = async () => {
         try {
           const historyData = await API.graphql(graphqlOperation(listBookings))
           const historyList = historyData.data.listBookings.items;
           console.log('history ', historyList);
           setHistory(historyList)
          } catch (error) {
           console.log('Error on fetchng data ', error)
         }
      }

  React.useEffect(() => {
     fetch()
  }, [])


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box>
       <div className="searchPage_info  ">
                <h1>Stays nearby</h1>
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="history" ><Button variant="outline">HISTORY</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="google" ><Button variant="outline">GOOGLE MAP</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="rooms" ><Button variant="outline">HOME</Button> </Link> 
                <Link className="searchPage_info  " style={{textDecoration: 'none'} } to="history" ><Button variant="outline">History</Button> </Link> 
            </div>
      <CssBaseline />
     
       
      <div className="container aboutus" style={{width:1000}}>
       {
         history.map(history => {
          return<div className="searchResult">
            <div className="searchResult__info">
                <div className="card border-0 shadow-lg p-4" key={history.ID} style={{width:'100%'}}>
                     
                    <div className="card-body" >
                        <h5 className="card-title mb-0">{dateFormat(history.createdAt, "dd mmmm yyyy, dddd")}</h5>
                        <div className="card-text text-black-80">
                            Check in Date: <p className="float-right">{dateFormat(history.startDate, "dd mmmm yyyy")}</p>
                            Checkout Date: <p className="float-right">{dateFormat(history.endDate, "dd mmmm yyyy")}</p>
                            Total payment: <p className="float-right">{history.price}</p>
                            Total no days: <p className="float-right">{history.numberOfDays}</p>
                        </div>
                    </div>  
                </div>
            </div> 
            
          </div>
       })}
    </div>

    </Box>
  );
}
export default History;