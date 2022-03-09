const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "./assets/react.png"
        }
    }) => {
    return (
        <li className="list-group-item d">
            <div className="d-text">
                {topic(post)}
                <c class="title">{post.userName}
                    <c class="grey">
                        <span className="fa-stack white">
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        - {post.time}</c>
                </c>
                <br></br>
                <c className="main-text"> {post.title} </c>
            </div>
            <div className="image">
                <img src={post.image} alt={post.topic}/>
            </div>
        </li>
    )
}

const topic = (post) => {
    if (post.topic !== "") {
        return (
            <>
                <c class="sub-text grey"> {post.topic} </c>
                <br></br>
            </>
        );
    }
    return "";
}
export default PostSummaryItem;