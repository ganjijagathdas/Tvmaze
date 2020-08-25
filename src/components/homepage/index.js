import React, { Component } from "react";
import ShowList from "../show-list";
import axios from 'axios';
import ShowForm from './showForm';
import Loader from "../loader";
var REQUEST_URL = 'http://api.tvmaze.com/shows';

class HomePage extends Component {
  state = {
    showsData: null,
    isLoading: true,
    inputValue: ''
  };

  componentDidMount() {
    this.fetchShowsData();
  }

  fetchGenresData = () => {
    const { showsData } = this.state;
    let genresType = new Set();
    if (showsData) {
      showsData.forEach((show) => {
        genresType.add(...show.genres);
      });
    }
    return [...genresType];
  };

  fetchShowsData = () => {
    axios.get(REQUEST_URL)
      .then((res) => this.setState({ showsData: this.sortByRating(res.data) , isLoading: false }))
      .catch((error) => this.setState({ showsData: [], isLoading: true }));
  };
  sortByRating = (data) =>{
    return data.sort((a, b) => a.rating && b.rating ? parseFloat(b.rating.average) - parseFloat(a.rating.average) : -1);
  }
  getGenereFilter = (data, type) =>{
    return data.filter(el => el.genres.indexOf(type) > -1);
  }
  render() {
    const { showsData, isLoading } = this.state;
    const genresData = this.fetchGenresData();
    return (
      <div>
        {isLoading ? <Loader /> : ''}
        <ShowForm />
        {genresData.length ? (
          genresData.map((genreType,index) => (
            <ShowList type={genreType} shows={this.getGenereFilter(showsData, genreType)} key={index} />
          ))
        ) : null }
      </div>
    );
  }
}

export default HomePage;
