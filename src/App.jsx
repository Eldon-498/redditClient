/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css'

function App (){

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://www.reddit.com/subreddits.json').
    then((response)=> {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      
      return response.json();
      //response.json;
    })
    .then((data) => {
      console.log(data.data.children);
      const topPosts = data.data.children.map((posts)=> posts.data);
      setData(topPosts);

     
      }).
    catch((error) =>{
      console.log("Error fecthing data");
      throw error;
    });
    
  },[]);


   return ( 
    <>
    <h1>HelloReddit</h1>
    <ul>
       {data.map((data) => {
         return <li key={data.id}>{data.title}</li>;
       })}
     </ul>
     </>
     );


  
}
export default App;