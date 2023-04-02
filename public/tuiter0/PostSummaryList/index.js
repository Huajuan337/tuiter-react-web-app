import PostSummmaryItem from './PostSummaryItem.js';
import posts from './posts.js'; 


function PostSummaryList() {
    return(`
        ${
            posts.map(post => {
                return(PostSummmaryItem(post))
            }).join("")
        }
        
    `)
}

export default PostSummaryList; 