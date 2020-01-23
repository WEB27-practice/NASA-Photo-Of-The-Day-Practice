  
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import Header from "./components/Header.js";
import PhotoContainer from "./components/PhotoContainer.js";

// const Background = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-image: url(https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1350&q=80);
//   background-repeat: no-repeat;
// `;

const DateBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;
padding: 1rem;
background-color: rgba(0, 0, 0, .5);
border-radius: 5px 50px 5px 50px;
`;

const App = () => {


  const [daily, setDaily] = useState([]);
  // const [newDate, setNewDate] = useState(`2014-10-12`);
  const [newDate, setNewDate] = useState(`2014-10-15`);

  useEffect(() => {
      

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE&date=${date}`)
      .then(res => {
        console.log(res.data)
        setDaily(res.data);
        const grab = document.querySelector('.App');
        console.log(grab);
        const backgroundImg = res.data.url;
        grab.style.background = 'url("'+backgroundImg+'") repeat center center/cover';   
      })
      .catch(err => {
          console.log(`There was an error`, err)
      });
    }, []);

    
    const handleChange = (e) => {
      console.log(e.target.value)
      return (e.target.value < `1995-06-16` ? alert(`There are no pictures past June 16th, 1995. Please select another date and try again.`) : setNewDate(e.target.value));
      // setNewDate(e.target.value);
      // console.log(newDate);
    }
    
     // const date = '2014-10-12';
     const date = newDate;

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE&date=${date}`)
      .then(res => {
        console.log(res.data)
        setDaily(res.data);
        const grab = document.querySelector('.App');
        console.log(grab);
        const backgroundImg = res.data.url;
        grab.style.background = 'url("'+backgroundImg+'") repeat center center/cover';   
      })
      .catch(err => {
          console.log(`There was an error`, err)
      }, []);
    };
    
   
  return (
    <div className="App" >
        <Header />
        <DateBox>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" onChange={handleChange}/>
            <button>Submit</button>
          </form>
        </DateBox>
        <PhotoContainer data={daily}/>
    </div>
  );
}

export default App;