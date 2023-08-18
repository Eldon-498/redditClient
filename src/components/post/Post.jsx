/* eslint-disable react/prop-types */
import './post.css';


const Post = ({ post }) => {
    const {title, image, likes, num_comments, author_fullname, timePosted} = post;
    console.log("post data", post);
    


    return ( 
        <div className='post'>
            <h2>{title}</h2>
            {image && <img src={image} alt='Post' />}
            <p>Likes: {likes}</p>
            <p>Comments: {num_comments}</p>
            <p>Posted by: {author_fullname}</p>
            <p>Time Posted: {timePosted}</p>
        </div>
     );
}
 
export default Post;