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
        <li className="list-group-item d" key={post.topic}>
            <div className="d-text">
                {topic(post)}
                <span className="title">{post.userName}
                    <span className="grey">
                        <span className="fa-stack white">
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        - {post.time}</span>
                </span>
                <br></br>
                <span className="main-text"> {post.title} </span>
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
                <span className="sub-text grey"> {post.topic} </span>
                <br></br>
            </>
        );
    }
    return "";
}
export default PostSummaryItem;