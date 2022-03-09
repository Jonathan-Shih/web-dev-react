const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../assets/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return (
        <li className="list-group-item" key={who.userName}>
            <div className="WhoToFollow-list-group-item">
                <span><div className="image"><img src={who.avatarIcon} alt={who.userName}/></div></span>
                <div className="account">
                    <b>{who.userName}</b>
                    <span className="fa-stack">
                        <i className="fas fa-certificate fa-stack-2x"></i>
                        <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="br"> </span>
                    @{who.handle}
                </div>
                <button type="button" className="btn btn-primary btn-sm follow wd-float-right">Follow
                </button>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
