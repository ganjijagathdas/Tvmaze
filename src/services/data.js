import React from "react";
import axios from 'axios';
var REQUEST_URL = 'http://api.tvmaze.com/shows';
export default function Data() {
    // getShowsList = () => {
    axios.get(REQUEST_URL)
                .then((response) => {
                    // callback(response);
                    return response;
                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status === 404) {
                            // callback(error);
                        }
                        return error;
                    }
                })
    // }
}