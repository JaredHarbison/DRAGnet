import { connect } from 'react-redux';
import React, {Component} from 'react';
import QueenQuote from './QueenQuote';
import { initialState } from '../../reducers/initialState.js'

//const QueenQuotes = ({ queen }) => {
//    const renderQueenQuote = queen.quotes.map(quote =>
//        <QueenQuote queen={queen} quote={quote} key={quote.id}/>
//    );
//    return (
//        <div>
//            {renderQueenQuote}
//        </div>
//    );
//};
//
//export default QueenQuotes;


class QueenQuotes extends Component {
    state = initialState;

    render() {
        const renderQueenQuote = this.props.queen.quotes.map(quote =>
            <QueenQuote queen={this.props.queen} quote={quote} key={quote.id}/>
        );
        return(
            <div>
                {renderQueenQuote}
            </div>
        );
      }
};

function mapStateToProps(state) {
    return { state, quotes: [] };
};

export default connect (mapStateToProps)(QueenQuotes);