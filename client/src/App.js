  
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import styled from "styled-components";

import Header from "./components/Header.js";
import PhotoContainer from "./components/PhotoContainer.js";

// const Background = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-image: url(https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80);
//   background-repeat: no-repeat;
// `;

const App = () => {
  
  const [daily, setDaily] = useState([]);
  

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE`)
          .then(res => {
              console.log(res.data)
              setDaily(res.data);
              const grab = document.querySelector('.App');
              console.log(grab);
              const backgroundImg = res.data.url;
              grab.style.backgroundImage = 'url("'+backgroundImg+'")';
              
          })
          .catch(err => {
              console.log(`There was an error`, err)
          });
  }, []);

  
  

  return (
    <div className="App">
        <Header />
        <PhotoContainer data={daily}/>
    </div>
  );
}

export default App;