import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = (
    {
        tuit = {
            _id: '123',
            topic: 'Web Development',
            postedBy: {
                userName: 'ReactJS'
            },
            liked: true,
            verified: false,
            handle: 'ReactJS',
            time: '2h',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            tuit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            profileImage: '../tuiter/assets/react.png',
            linkedImage: '',
            stats: {
                comments: '123',
                retuits: '234',
                likes: '345'
            }
        }
    }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <li className="list-group-item tuit-list">
            <div className="p-0 pt-1 col-1 profile">
                <img src={tuit.profileImage} className="profileImage"/>
            </div>
            <div className="ps-3 pb-1 col-11 main-tuit">
                <i onClick={() => deleteTuit(tuit)} className="fas fa-times fa-pull-right"></i>
                <span className="f-bold">
                    {tuit.postedBy.userName}
                    <span className={`fa-stack ${(tuit.verified) ? "" : "no-display"}`}>
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                    </span>
                </span>
                <span className="f-grey">
                    @{tuit.handle} - {tuit.time}
                </span>
                <div className="tuit-content">
                    {tuit.tuit}
                </div>
                <div className={`linked-content ${(tuit.linkedImage === "") ? "no-display" : ""}`}>
                    <img src={tuit.linkedImage} className=""/>
                </div>
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    )
}

export default TuitListItem;