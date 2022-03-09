import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        <ul class="posts">
            {
                posts.map(post => {
                    return (
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;