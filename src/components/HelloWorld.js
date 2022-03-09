import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./Tuiter/ExploreScreen/ExploreScreen";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/lab">
                Labs
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default HelloWorld;

