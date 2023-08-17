import { useState } from 'react';
import './home.css';

import Post from '../post/Post';
import usePosts from '../../hooks/usePosts';
import useSubreddits from '../../hooks/useSubreddits';
import SubredditList from '../subredditList/SubRedditList';

const Home = () => {
    const subReddits = useSubreddits();
    const [selectedSubreddit, setSelectedSubreddit] = useState(null);
    const topPosts = usePosts(selectedSubreddit);    
 
    const handleSubredditClick = (subreddit) =>{
      setSelectedSubreddit(subreddit);
    }

    return (  
        <div className="home-container">
        <h1 className="home-title">Reddit Client</h1>
        <div className='content'>
        <SubredditList subreddits = {subReddits} onSubredditClick={handleSubredditClick}/>
        {selectedSubreddit && topPosts.length > 0 && <Post post={topPosts[0]} />}
        </div>
        </div>
    );
}
 
export default Home;