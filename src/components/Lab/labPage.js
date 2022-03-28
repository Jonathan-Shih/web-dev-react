import React from "react";
import { Link } from "react-router-dom";

const Lab = () => {
    return(
        <>
            <h1>Labs</h1>
        <Link to="a6">
            A6 labs
        </Link> |
        <Link to="a7">
            A7 labs
        </Link>
        </>
    )
};

export default Lab;
