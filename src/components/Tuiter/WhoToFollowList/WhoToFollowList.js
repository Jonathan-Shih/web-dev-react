import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <ul className="list-group">
            {
                who.map(w => {
                    return(
                        <WhoToFollowListItem who={w} key={w.userName}/>
                    );
                })
            }
        </ul>
    ); }
export default WhoToFollowList;