/* eslint-disable react/prop-types */
import './post.css';


const Post = ({ post }) => {
    const {title, thumbnail, likes, num_comments, author_fullname, timePosted} = post;
    console.log("post data", post);
    if (!post) {
        return <div>Loading...</div>;
    }
    


    return ( 
        <div className='post'>
            <h2>{title}</h2>
            {thumbnail && <img src={thumbnail} alt='Post' />}
            <p>Likes: {likes}</p>
            <p>Comments: {num_comments}</p>
            <p>Posted by: {author_fullname}</p>
            <p>Time Posted: {timePosted}</p>
        </div>
     );
}
 
export default Post;