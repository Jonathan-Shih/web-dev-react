import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return (<>
            <div className="top-bar">
                <i className="fa fa-search"></i>
                <input className="top_search" type="text" id="searchbar" placeholder="Search Tuiter"/><br/><br/>
                <i className="fa fa-cog fa-25px blue"></i>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active text-nowrap" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="main-img">
                <img className="spacex" src="tuiter/assets/spacex.jpg"/>
                <h2 className="position-absolute bottom-0 ps-3 white">SpaceX's Starship</h2>
            </div>
            {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;