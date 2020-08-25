import React, { Component } from "react";
import axios from 'axios';
import ShowCard from "../show-card/index";
import { Link } from "react-router-dom";

class ShowDetail extends Component {

  state = {
    show: null,
  };

  componentDidMount() {
    this.fetchShowData();
  }

  fetchShowData() {
    const id = this.props.match.params.id;

    axios.get(`http://api.tvmaze.com/shows/${id}`)
      .then((res) => this.setState({ show: res.data }))
      .catch(() => this.setState({ error: true }));

  }

  render() {
    const { show } = this.state;
    return (
      <div className="show-detials-wrapper">
        {show !== null &&
          <div className="show-detials">
            <Link to={{ pathname: '/' }}>
              <button className="back-btn">back</button>
            </Link>
            <h3>{show.name}</h3>
            <div className="image-detials">
              <img
                alt=''
                className="image_display"
                src={show.image.medium}
              ></img>
              <ShowCard show={show} />
            </div>
            <div className="show-info" dangerouslySetInnerHTML={{__html: show.summary}}>
            </div>
          </div>}
      </div>
    );
  }
}

export default ShowDetail;
