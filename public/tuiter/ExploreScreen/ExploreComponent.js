import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="top-bar">
                    <i class="fa fa-search"></i>
                    <input class="top_search" type="text" id="searchbar" placeholder="Search Tuiter"><br><br>
                    <i class="fa fa-cog fa-25px" style="color: #299fd6"></i>
                </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active text-nowrap" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="new.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <div class="main-img">
                <img class="spacex" src="../assets/spacex.jpg">
                <h2 class="position-absolute bottom-0 ps-3 text-black">SpaceX's Starship</h2>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
