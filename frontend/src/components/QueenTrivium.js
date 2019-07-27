import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteTrivium } from '../actions/queenActions'

class QueenTrivium extends Component {

    handleSubmit = event => {
        event.preventDefault();
        this.props.deleteTrivium({
            queen: this.props.queen.id,
            trivium:  { queen_id: this.props.queen.id },
            id: this.props.trivium.id,
          });
          this.setState()
    }

    render() {
        return (
            <div className="ui fluid card" key={this.props.trivium.id}>
                <div className="content">
                    <div className="ui feed">
                        <div className="meta">{this.props.trivium.id} - {this.props.trivium.content}</div>
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

export default connect(
  null,
  mapDispatchToProps
)(QueenTrivium);


//      id: this.props.trivium.id,
//      trivium: this.props.trivium



//handleSubmit = event => {
//    event.preventDefault();
//    this.props.addTrivia({
//      queen: this.props.queen.id,
//      trivium:    {
//                  queen_id: this.props.queen.id,
//                  content: this.state.text}
//    });
//    this.setState({ text: '' })
//}