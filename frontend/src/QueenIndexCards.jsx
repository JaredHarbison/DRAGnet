import React from 'react';
import { Link } from 'react-router-dom';


const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const QueenIndexCards = ({ filteredQueens }) => {
    const renderQueens = filteredQueens.map(queen =>
        <div className="ui fluid cards" key={queen.id}>
            <div className="ui fluid card">
                <div className="content">
                    <img  src={queen.primary_image}
                          alt={queen.drag_name}
                          className="ui tiny left floated image"/>
                    <div className="header">
                          <Link key={queen.id}
                                to={`/queens/${queen.id}`}>{queen.drag_name}</Link></div>
                    <div className="meta">real name - {queen.real_name} </div>
                    <div className="meta"> hometown - {queen.hometown} </div>
                    <div className="meta"> current city - {queen.current_city} </div>
                    <div className="meta"> date of birth - {new Date(queen.date_of_birth).toLocaleDateString('en-US', DATE_OPTIONS)} </div>
                </div>
            </div>
        </div>
  );
  return (
      <div>
          {renderQueens}
      </div>
  );
};

export default QueenIndexCards;
