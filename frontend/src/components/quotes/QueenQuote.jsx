import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteQuote } from '../../actions/index'
import UpVote from '../common/UpVote';
import DownVote from '../common/DownVote';
import {initialState} from '../../reducers/initialState';

class QueenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { initialState };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.deleteQuote({
          id: this.props.quote.id,
          queen: this.props.queen.id,
          quote: {
              queen_id: this.props.queen.id,
              id: this.props.quote.id
                    }
        });
          this.setState()
    }

    render() {
        return (
            <div className="ui fluid card" key={this.props.quote.id}>
                <div className="content" key={this.props.quote.id}>
                    <div className="ui feed" key={this.props.quote.id}>
                        <div className="meta">{this.props.quote.id} - {this.props.quote.content}</div>
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


const mapDispatchToProps = { deleteQuote };

export default connect(
  null,
  mapDispatchToProps
)(QueenQuote);
