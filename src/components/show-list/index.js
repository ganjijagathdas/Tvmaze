import React from "react";
import { Link } from "react-router-dom";


export default ({ type, shows }) => {
  if (shows.length === 0) return null;
  let List = shows
    .map((show,index) => (
      <div className="column_pic" key={index}> 
        <Link to={{ pathname: `/show/${show.id}`, show }}>
          <img src={show.image ? show.image.medium : null} alt={show.name} className="show-card" />
          <div className="show_name">{show.name + ' '}{show.rating.average ? '(' + show.rating.average + '/10)' : '(NA)'}</div>
        </Link>
      </div>
    ))
  return (
    <div className="list-wrapper">
      <h2>{type}</h2>
      <div className="show-list">{List}</div>
      <hr className="divider"></hr>
    </div>
  );
};
