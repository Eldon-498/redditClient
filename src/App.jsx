/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './components/home/Home';

function App (){

    const [subReddits, setSubReddits] = useState([]);

    useEffect(()=>{

    }, []);

    const fetchSubreddits = async () =>{
      try{
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const data = await response.json();
        const subredditList = data.data.children.map(child => ({
          displayName: child.data.display_name,
          title: child.data.title,
          url:child.data.url

        }))
        setSubReddits(subredditList);
      } catch(error){
        console.log("Error fetching subreddits", error);
      }
    }


   return ( 
    <>
    <Home />
     </>
     
     );


  
}
export default App;