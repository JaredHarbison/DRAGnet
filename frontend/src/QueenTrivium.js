import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteTrivium } from './actions/queenActions'


class QueenTrivium extends Component {

handleSubmit = event => {
    event.preventDefault();
    this.props.deleteTrivium({id: this.props.trivium.id});
}

render() {
    return (
        <div className="ui fluid card">
            <div className="content">
                <div class="ui feed">
                    <div className="meta">{this.props.trivium.content}</div>
                        <button className="ui mini icon button"
                                onClick={event => this.handleSubmit(event)}>
                            <i aria-hidden="true" 
                               className="trash alternate outline icon">
                            </i>
                        </button>
                </div>
            </div>
        </div>
  );
};
}

const mapDispatchToProps = { deleteTrivium };

export default connect(null, mapDispatchToProps)(QueenTrivium);