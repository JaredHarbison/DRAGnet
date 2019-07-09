import React from 'react';
import { Link } from 'react-router-dom';

const QueenIndex = ({ dragQueens }) => {
    const renderQueens = dragQueens.map(queen =>
        <div className="ui fluid cards">
            <div className="ui fluid card">
                <div className="content">
                    <img  src="https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/01/BenDeLaCremeAS3.jpg/revision/latest/scale-to-width-down/350?cb=20171021045348"
                          className="ui tiny left floated image"/>
                    <div className="header">
                          <Link key={queen.id}
                                to={`/queens/${queen.id}`}>{queen.drag_name}</Link></div>
                    <div className="meta">à la {queen.real_name} </div>
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
