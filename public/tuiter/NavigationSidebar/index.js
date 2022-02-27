const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a href=# class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-home"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Home</div>
                    </a>
                    <a href=# class="list-group-item active">
                        <i class="fa fa-hashtag"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Explore</div>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-bell"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Notifications</div>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-envelope"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Messages</div>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-bookmark"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Bookmarks</div>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-list"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Lists</div>
                    </a>
                    <a href=# class="list-group-item">
                        <i class="fa fa-user"></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> Profile</div>
                    </a>
                    <a href=# class="list-group-item">
                        <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                        </span></i>
                        <div class="d-xl-inline d-lg-none d-md-none d-sm-none"> More</div>
                    </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
