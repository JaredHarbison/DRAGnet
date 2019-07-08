import React from 'react';

const QueenTriviumIndex = ({ queen }) => {
    const renderQueenTrivium = queen.trivia.map(trivium =>
        <div key = {trivium.id}>
            <div className="comment">
                <div className="meta">
                    <ul>{trivium.content}</ul>
                </div>
            </div>
        </div>

  );
  return (
      <div>
          {renderQueenTrivium}
      </div>
  );
};

export default QueenTriviumIndex;
