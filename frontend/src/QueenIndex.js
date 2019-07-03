import React from 'react';
import { Link } from 'react-router-dom';

const QueenIndex = ({ dragQueens }) => {
    const renderQueens = dragQueens.map(queen =>
        <div key = {queen.id}>
            <div className="ui card">
                <div className="ui large comments"
                     key={queen.id}>
                    <div className="comment">
                        <div className="avatar">
                            <img alt={queen.drag_name}
                             src="https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/01/BenDeLaCremeAS3.jpg/revision/latest/scale-to-width-down/350?cb=20171021045348"/></div>
                        <div className="content">
                            <Link key={queen.id}
                                  to={`/queens/${queen.id}`}>
                                  {queen.drag_name}</Link>
                        <div className="meta"> à la {queen.real_name} </div>
                    </div>
                </div>
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
