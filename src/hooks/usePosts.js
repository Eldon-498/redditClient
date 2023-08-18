import { useEffect, useState } from 'react';

const usePosts = (selectedSubreddit) => {
const [topPosts, setTopPosts] = useState([]);
console.log("top posts", topPosts);

useEffect(()=>{
    
    console.log('Fetching top posts for:', selectedSubreddit);
    if(selectedSubreddit) {
      fetchTopPosts(selectedSubreddit);
    }
    
  },[selectedSubreddit])



const fetchTopPosts = async (subreddit) => {
    try{
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json`);
      const data = await response.json();
      const topPostsList = data.data.children.map(child => (child.data));
      setTopPosts(topPostsList);
    }
    catch(error) {
      console.error("Error Fetching Top Posts", error);
    }
}
return topPosts;
}

export default usePosts;