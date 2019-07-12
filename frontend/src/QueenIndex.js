import React from 'react';
import { Link } from 'react-router-dom';

const QueenIndex = ({ dragQueens }) => {
    const renderQueens = dragQueens.map(queen =>
        <div className="ui fluid cards" key={queen.id}>
            <div className="ui fluid card">
                <div className="content">
                    <img  src={queen.image}
                          alt={queen.drag_name}
                          className="ui tiny left floated image"/>
                    <div className="header">
                          <Link key={queen.id}
                                to={`/queens/${queen.id}`}>{queen.drag_name}</Link></div>
                    <div className="meta">real name - {queen.real_name} </div>
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

export default QueenIndex;
