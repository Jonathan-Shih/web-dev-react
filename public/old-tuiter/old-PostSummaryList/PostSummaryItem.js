const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item d">
            <div class="d-text">
                ${topic(post)}
                <c class="title" style="color: white">${post.userName} 
                    <c class="grey">
                        <span class="fa-stack">
                            <i class="fas fa-certificate fa-stack-2x" style="color: white"></i>
                            <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    - ${post.time}</c>
                </c>
                <br>
                <c class="main-text" style="color: white"> ${post.title} </c>
            </div>
            <div class="image">
                <img src=${post.image}/>
            </div>
        </li>
    `)
}

const topic = (post) => {
    if (post.topic !== "") {
        return (`<c class="sub-text grey"> ${post.topic} </c>
                    <br>
                `);
    }
    return "";
}
export default PostSummaryItem;