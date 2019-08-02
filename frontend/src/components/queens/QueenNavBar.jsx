import React from 'react';
import { Link } from 'react-router-dom';

const QueenNavBar = ({dragQueens}) => (
    <div className="ui inverted fluid four item menu">

        <Link className="item" to="/"> DRAGnet </Link>

        <Link className="item" to="/queens"> Browse Queens </Link>

        <Link className="item" to="/"> Browse Seasons </Link>

        <Link className="item" to="/"> Your Account </Link>

    </div>
);

export default QueenNavBar
