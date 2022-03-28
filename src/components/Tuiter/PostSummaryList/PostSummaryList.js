import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        <ul className="posts">
            {
                posts.map(post => {
                    return (
                        <PostSummaryItem post={post} key={post.title}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;