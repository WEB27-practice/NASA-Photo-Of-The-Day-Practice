  
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import styled from "styled-components";

import Header from "./components/Header.js";
import PhotoContainer from "./components/PhotoContainer.js";

// const Background = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-image: url({res.data.url});
//   background-repeat: no-repeat;
// `;

const App = () => {
  
  const [daily, setDaily] = useState([]);
  

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE`)
          .then(res => {
              console.log(res.data)
              setDaily(res.data);
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