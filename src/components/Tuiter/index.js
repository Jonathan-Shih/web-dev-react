import React from "react";
import "../explore.css";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Link} from "react-router-dom";

const Tuiter = () => {
    return(
        <>
            <ExploreScreen/>
            <Link to="/lab">
                Labs
            </Link> |
            <Link to="/hello">
                Hello World
            </Link>
        </>
    )
};
export default Tuiter;
