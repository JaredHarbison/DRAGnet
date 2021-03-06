//import { connect } from 'react-redux';
import React from 'react';
import QueenTrivium from './QueenTrivium'

const QueenTrivia = ({ queen }) => {
    const renderQueenTrivium = queen.trivia.map(trivium =>
        <QueenTrivium queen={queen} trivium={trivium} key={trivium.id}/>
    );
    return (
        <div>
            {renderQueenTrivium}
        </div>
    );
};
//.slice(0, 10)
//const mapStateToProps = (state) => ({ trivia: state.trivia });
//export default connect(mapStateToProps)(QueenTrivia);
export default QueenTrivia;
