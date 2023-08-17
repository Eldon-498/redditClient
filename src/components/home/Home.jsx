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
      <>      
      <h1 className="home-title">Reddit Client</h1>
      <h2 className='subreddit-title'>Subreddits</h2>
      <div className="home-container">        
        <div className='content'>
          <div className='subreddit-list-container'>
            <SubredditList subreddits = {subReddits} onSubredditClick={handleSubredditClick}/>
          </div>
          <div className='post-container'>
            {selectedSubreddit && topPosts.length > 0 && <Post post={topPosts[0]} />}
          </div>        
        </div>
      </div>
      </>
    );
}
 
export default Home;