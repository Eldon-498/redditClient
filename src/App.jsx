/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './components/home/Home';
import SubredditList from './components/subredditList/SubRedditList';
import Post from './components/post/Post';

function App (){

    const [subReddits, setSubReddits] = useState([]);
    const [topPosts, setTopPosts] = useState([]);
    const [selectedSubreddit, setSelectedSubreddit] = useState(null);

    useEffect(()=>{
      fetchSubreddits();

    }, []);

    useEffect(()=>{
      console.log('Fetching top posts for:', selectedSubreddit);
      if(selectedSubreddit) {
        fetchTopPosts(selectedSubreddit);
      }
      
    },[selectedSubreddit])


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

    const handleSubredditClick = (subreddit) =>{
      setSelectedSubreddit(subreddit);
    }



   return ( 
    <>
    <Home />
    <SubredditList subreddits = {subReddits} onSubredditClick={handleSubredditClick}/>
    {selectedSubreddit && topPosts.length > 0 && <Post post={topPosts[0]} />}
    </>
     
     );


  
}
export default App;