/* eslint-disable no-unused-vars */
import './subredditList.css';



// eslint-disable-next-line react/prop-types
const SubredditList = ({ subreddits }) => {
    return ( 
        <div className='subreddit-list'>
            <h2 className='subreddit-list'>Subreddits</h2>
            <ul className='subreddit-list'>
                {
                    // eslint-disable-next-line react/prop-types
                    subreddits.map(subreddit =>(
                        <li key={subreddit.displayName}>
                            <button>
                                {subreddit.title}
                            </button>

                        </li>
                    ))
                }
            </ul>
        </div>

     );
}
 
export default SubredditList;