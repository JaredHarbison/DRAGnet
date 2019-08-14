import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({dragQueens}) => (
    <div className="ui inverted fluid four item menu">

        <Link className="item" to="/"> DRAGnet </Link>

        <Link className="item" to="/queens"> Browse Queens </Link>

        <Link className="item" to="/seasons"> Browse Seasons </Link>

        <Link className="item" to="/"> Your Account </Link>

    </div>
);

export default NavBar
