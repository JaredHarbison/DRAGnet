import React from 'react';

const QueenTriviumIndex = ({ queen }) => {
    const renderQueenTrivium = queen.trivium.map(trivia =>
        <div key = {trivia.id}>
            <div className="comment">
                <div className="meta">
                    <ul>{trivia.content}</ul>
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
