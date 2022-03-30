import React, { useEffect, useState } from 'react';
import "./searchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';
import { API, graphqlOperation} from 'aws-amplify';
import { listPosts } from './graphql/queries';
import Header from './Header';
import Footer from './Footer';



function SearchPage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    

    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts))
        
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e)

      }

    }
    fetchPosts();
  },  [])
    return (
        <div className="searchPage">
          <Header />
            <div className="searchPage_info  ">
                <p>62 stays. 24 september to 27 september . 2 quest</p>
                <h1>Stays nearby</h1>
                <Button className="button" variant="outline">Cancellation flexibility</Button>
                <Button variant="outline">Type of place</Button>
                <Button variant="outline">Prices</Button>
                <Button variant="outline">Rooms and beds</Button>
                <Button variant="outline">more filters</Button>
            </div>
            {posts.map((item) =>
           (  <div className="searchResult " key={item.id}>
             <img src={item.image} alt="" />
             <div className="searchResult__info">
             <div className="searchResult__infoTop">
             {item.type}  
             {item.title}
             <p>____</p>
             <p> {item.description}</p>
             </div>
             <div className="searchResult__infoBottom">
             <div className="searchResult__price">
             <h3>R{item.newPrice}0.00/per night</h3>
             </div>
             </div>
             </div>
              </div>) )}
            {/* <SearchResult
              img="https://images.unsplash.com/photo-1616048056617-93b94a339009?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              location="Private room in the center of Midrand"
              title="Stay at this spacious Edwardian house"
              description="2 guest . 2 bedrooms . 2 beds . 1.5 shared bath - Wifi - kitchen - plus parking - washing machine"
              star={4.7}
              price="R970/per night"
            />
            <SearchResult
              img="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              location="luxury setting guest house near carlwald mall "
              title="Stay at this spacious Edwardian house"
              description="2 guest . 2 bedrooms . 2 beds . 1.5 shared bath - Wifi - kitchen - plus parking - washing machine"
              star={4.7}
              price="R970/per night"
            />
             <SearchResult
              img="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              location="Private room in the center of noord wayk"
              title="Independant luxury studio apartment"
              description="2 guest . 3 bedrooms . 2 beds . 1.5 shared bath - Wifi - kitchen - plus parking - washing machine"
              star={4.7}
              price="R1400/per night"
            /> */}
            <Footer />
        </div>
    )
}

export default SearchPage
