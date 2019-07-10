import { connect } from 'react-redux';
import React, { Component } from 'react';
import {deleteTrivium } from './actions/queenActions';


const QueenTrivia = ({ queen }) => {
    const renderQueenTrivium = queen.trivia.map(trivium =>
        <div className="ui fluid card">
            <div className="content">
                <div class="ui feed">
                    <div className="meta">{trivium.content}</div>

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

export default QueenTrivia;
//<div className="actions">
//    <button className="ui mini icon button"><i aria-hidden="true" className="trash alternate outline icon"></i></button>
//    <button className="ui mini icon button"><i aria-hidden="true" className="edit outline icon"></i></button>
//</div>
