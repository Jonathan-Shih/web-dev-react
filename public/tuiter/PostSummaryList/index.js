import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    <ul class="posts">
                ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
                
            </ul>
`);
}
export default PostSummaryList;