/* eslint-disable no-unused-vars */
import './subredditList.css';
// eslint-disable-next-line react/prop-types
const SubredditList = ({ subreddits, onSubredditClick }) => {
    return ( 
        <>
        <h2 >Subreddits</h2>
        <div className='subreddit-list'>
            
            <ul className='subreddit-list'>
                {
                    // eslint-disable-next-line react/prop-types
                    subreddits.map(subreddit =>(
                        <li title={subreddit.title} key={subreddit.displayName}>
                            <button onClick={()=> onSubredditClick(subreddit.displayName)}>
                                {subreddit.title}
                            </button>

                        </li>
                    ))
                }
            </ul>
        </div>
        </>

     );
}
 
export default SubredditList;