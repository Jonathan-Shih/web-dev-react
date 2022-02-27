
const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="WhoToFollow-list-group-item">
                <span><div class="image"><img src=${who.avatarIcon}></div></span>
                <div class="account">
                <b>${who.userName}</b>
                <span class="fa-stack">
                <i class="fas fa-certificate fa-stack-2x" style="color: black"></i>
                <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                </span>
                <span class="br"> </span>
                <c>${who.handle}</c>
                </div>
                <button type="button" class="btn btn-primary btn-sm follow wd-float-right">Follow
                            </button>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
