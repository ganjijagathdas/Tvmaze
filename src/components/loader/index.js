import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loader = () =>(
    <div className="loader-wrapper">
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
);

export default Loader;