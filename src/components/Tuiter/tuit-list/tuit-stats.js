import { useDispatch } from "react-redux";
import React from "react";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="stats">
      <div className="row">
        <div className="col">
          <i className="far fa-comment" />
          {tuit.stats.comments}
        </div>
        <div className="col">
          <i className="fas fa-retweet" />
          {tuit.stats.retuits}
        </div>
        <div className="col">
          <i
            onClick={() => {
              tuit.liked = !tuit.liked;
              updateTuit(dispatch, {
                ...tuit,
                likes: tuit.liked
                  ? (tuit.stats.likes += 1)
                  : (tuit.stats.likes -= 1),
              });
            }}
            className={`${
              tuit.liked ? "fas fa-heart me-1 red" : "far fa-heart me-1"
            }`}
          ></i>
          {tuit.stats.likes}
        </div>
        <div className="col">
          <i className="fas fa-external-link-alt" />
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
