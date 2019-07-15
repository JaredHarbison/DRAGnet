import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteTrivium } from './actions/queenActions'

class QueenTrivium extends Component {

    handleSubmit = event => {
        event.preventDefault();
        this.props.deleteTrivium({
            id: this.props.trivium.id,
            trivium: this.props.trivium
          });
    }

    render() {
        return (
            <div className="ui fluid card" key={this.props.trivium.id}>
                <div className="content">
                    <div className="ui feed">
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

//const mapStateToProps = (state) => ({ trivia: state.trivia,
//                                      dragQueens: state.queens.drag_queens});

const mapDispatchToProps = { deleteTrivium };

export default connect(
  null,
  mapDispatchToProps
)(QueenTrivium);
