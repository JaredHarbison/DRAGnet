//import { connect } from 'react-redux';
import React from 'react';
import QueenQuote from './QueenQuote'

const QueenQuotes = ({ queen }) => {
    const renderQueenQuote = queen.quotes.map(quote =>
        <QueenQuote queen={queen} quote={quote} key={quote.id}/>
    );
    return (
        <div>
            {renderQueenQuote}
        </div>
    );
};

export default QueenQuotes;
