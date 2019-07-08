import React from 'react';
import CreateTrivia from './CreateTrivia'
import QueenTriviumIndex from './QueenTriviumIndex'

const QueenShow = ({queen}) => {

    return queen ? (
        <div className="ui card">
            <div className="header">
                <h1>{queen.drag_name}</h1>
            </div>

            <div className="meta"> à la {queen.real_name} </div>
            <div className="meta">
                <QueenTriviumIndex queen = {queen} />
            </div>
            <CreateTrivia queen = {queen} />
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
