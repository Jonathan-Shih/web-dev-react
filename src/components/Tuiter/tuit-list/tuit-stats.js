import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
    <div className="stats">
        <div className="row">
            <div className="col">
                <i className="far fa-comment"/>
                {tuit.stats.comments}
            </div>
            <div className="col">
                <i className="fas fa-retweet"/>
                {tuit.stats.retuits}
            </div>
            <div className="col" onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt"/>
            </div>
        </div>
    </div>
);
}
export default TuitStats;