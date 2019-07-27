import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({dragQueens}) => (
    <div className="ui menu">

        <Link className="item" to="/"> DRAGnet </Link>

        <Link className="item" to="/queens"> Browse Queens </Link>

    </div>
);

export default NavBar 
