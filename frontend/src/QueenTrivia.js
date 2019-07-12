import { connect } from 'react-redux';
import React, { Component } from 'react';
import QueenTrivium from './QueenTrivium'

const QueenTrivia = ({ queen }) => {
    const renderQueenTrivium = queen.trivia.map(trivium =>
        <QueenTrivium trivium={trivium}/>
    );
    return (
        <div>
            {renderQueenTrivium}
        </div>
    );
};

const mapStateToProps = (state) => ({ trivia: state.trivia });

export default connect(mapStateToProps)(QueenTrivia);

