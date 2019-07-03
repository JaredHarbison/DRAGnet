import React from 'react';
import CreateTrivia from './CreateTrivia'

const QueenShow = ({queen}) => {

    return queen ? (
        <div className="ui card">
            <div className="header">
                <h1>{queen.drag_name}</h1>
            </div>
            <div className="meta">
                {queen.trivia}
            </div>
            <CreateTrivia queen = {queen} />
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
