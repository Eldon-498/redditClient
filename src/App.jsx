/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css'
import Home from './components/home/Home';
import SubredditList from './components/subredditList/SubRedditList';
import Post from './components/post/Post';
import usePosts from './hooks/usePosts';
import useSubreddits from './hooks/useSubreddits';

function App (){

    const subReddits = useSubreddits();
    const [selectedSubreddit, setSelectedSubreddit] = useState(null);
    const topPosts = usePosts(selectedSubreddit);
    
 
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