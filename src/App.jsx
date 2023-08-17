/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './components/home/Home';
import SubredditList from './components/subredditList/SubRedditList';
import Post from './components/post/Post';

function App (){

    const [subReddits, setSubReddits] = useState([]);
    const [topPosts, setTopPosts] = useState([]);

    useEffect(()=>{
      fetchSubreddits();

    }, []);


    const fetchTopPosts = async (subreddit) => {
        try{
          const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json`);
          const data = await response.json();
          const topPostsList = data.data.children.map(child => child.data);
          setTopPosts(topPostsList);
        }catch(error) {
          console.error("Error Fetching Top Posts", error);
        }
    }



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
    <SubredditList subreddits = {subReddits}/>
    <Post post={selectedPost} />
    </>
     
     );


  
}
export default App;