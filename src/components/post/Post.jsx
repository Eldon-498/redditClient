import './post.css';


const Post = ({ post }) => {
    const {title, image, likes, comments, postedBy, timePosted} = post;


    return ( 
        <div className='post'>
            <h2>{title}</h2>
            {image && <img src={image} alt='Post' />}
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <p>Posted by: {postedBy}</p>
            <p>Time Posted: {timePosted}</p>
        </div>
     );
}
 
export default Post;