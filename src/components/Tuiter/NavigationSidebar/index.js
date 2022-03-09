import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                        <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Home</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Explore</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa fa-bell"></i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Notifications</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa fa-envelope"></i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Messages</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark"></i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Bookmarks</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    < i className="fa fa-list"> < /i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Lists</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    < i className="fa fa-user"> < /i>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> Profile</div>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x"> </i>
                            <i className="fa fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                        </span>
                    <div className="d-xl-inline d-lg-none d-md-none d-sm-none"> More</div>
                </a>
            </div>
            <button type="submit" className="btn w-100 mt-3 btn-primary rounded-pill">Tuit</button>
        </div>
    );
}
export default NavigationSidebar;
