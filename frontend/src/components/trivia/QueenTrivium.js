import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteTrivium } from '../../actions/index'
import UpVote from '../common/UpVote';
import DownVote from '../common/DownVote';

class QueenTrivium extends Component {
    state = {};

    handleSubmit = event => {
        event.preventDefault();
        this.props.deleteTrivium({
          id: this.props.trivium.id,
          queen: this.props.queen.id,
          trivium: {
              queen_id: this.props.queen.id,
              id: this.props.trivium.id
                    }
        });
          this.setState()
    }

    render() {
        return (
            <div className="ui fluid card" key={this.props.trivium.id}>
                <div className="content" key={this.props.trivium.id}>
                    <div className="ui feed" key={this.props.trivium.id}>
                        <div className="meta">{this.props.trivium.id} - {this.props.trivium.content}</div>
                            <div className="ui buttons">
                                <UpVote/>
                                <DownVote/>
                                <button className="ui basic mini icon button"
                                        onClick={event => this.handleSubmit(event)}>
                                    <i aria-hidden="true"
                                    className="trash alternate outline icon">
                                    </i>
                                </button>
                            </div>
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
