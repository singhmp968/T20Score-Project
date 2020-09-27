import React,{ useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from "./components/Navbar";
import MyCard from './components/MyCard';
import{ getMatches } from "./api/Api";



function App() {
const [matches, setMatches] = useState([]);

useEffect(()=>{
  getMatches()
    .then((data)=>{
      setMatches(data.matches)
      console.log(data.matches)
 
    })
    .catch((error)=>console.log("bahi couldn't load data"));

},[])

  return (
    <div className="App">
     <Navbar></Navbar>
     <Typography variant="h3" style={{marginTop:20}}>Welcome to my Live Score app</Typography>
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">
      {
      matches.map((match)=>(
       <Fragment key={match.unique_id} >
         {
           match.type=="Twenty20" ? (<MyCard key={match.unique_id} match={match}/>
           ) : (
             ""
           )}
       </Fragment>
      ))}
    
      </Grid>
    </Grid>

    </div>
  );
}

export default App;
