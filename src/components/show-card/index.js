import React from "react";
import { RATING, COUNTRY, SHOW_TYPE, GENRES } from '../constants';

function ShowCard({ show }) {
  return (
    <div className="showcard_details">
      <div>
        <b>{RATING}</b><span>{show.rating.average ? show.rating.average : 'NA'}</span>
      </div>
      <div>
        <b>{COUNTRY}</b><span>{show.network.country.name ? show.network.country.name : 'NA'}</span>
      </div>
      <div>
        <b>{SHOW_TYPE}</b><span>{show.type ? show.type : 'NA'}</span>
      </div>
      <div>
        <b>{GENRES}</b><span>{show.genres ? show.genres : 'NA'}</span>
      </div>
    </div>
  );
}

export default ShowCard;
