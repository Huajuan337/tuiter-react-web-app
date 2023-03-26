import PostListItem from './post-list-item';
import posts from './posts.json';


const PostList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostListItem key={post._id} item={post} />
                )   
            }   
        </ul>  
    )
}

export default PostList; 